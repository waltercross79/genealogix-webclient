import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Person, Marriage } from '../services/models';

@Component({
  selector: 'app-tree-viewer',
  templateUrl: './tree-viewer.component.html',
  styles: []
})
export class TreeViewerComponent implements OnInit, AfterViewInit {  

  @Input() data: Person;

  constructor() { }

  ngOnInit() {
  }

  getCssClass(gender: String) {
    switch (gender) {
      case 'M': 
        return 'man';
      case 'F':
        return 'woman';
      default:
        return '';
    }  
  }

  getChildren(children: Person[]): person[] {
    let result = [];

    if(children) {
      children.forEach(c => {
        result.push(this.getPerson(c, this.getCssClass(c.gender), c.marriages));
      });
    }

    return result;
  }

  getMarriages(marriages: Marriage[]): marriage[] {
    let result = [];
    if(marriages) {
      marriages.forEach(m => {
        result.push(new marriage(
          this.getPerson(m.spouse), 
          this.getChildren(m.children))
        );
      });
    }
    return result;
  }

  getPerson(p: Person, c?: String, m?: Marriage[]): person {
    return new person(p.firstName + ' ' + p.lastName,
      this.getCssClass(p.gender),
      c,
      new extra(p.dateOfBirth, p.dateOfDeath),
      m ? this.getMarriages(m) : []);
  }

  createTree() {
    /* Convert Person into object tree of the structure expected by dTree */
    // The father of the current person should be the root; if no father then mother; if neither then this person.
    let root = this.data;

    if(this.data.parents && this.data.parents.length > 0) {
      let father = this.data.parents.find(p => p.gender == 'M');
      if(father) {
        root = father;
      } else {
        let mother = this.data.parents.find(p => p.gender == 'F');
        if(mother) {
          root = mother;
        }
      }
    }
    
    var treeRoot = this.getPerson(root, 'graphroot', root.marriages);    
    return [treeRoot];    
  }

  ngAfterViewInit(): void {
    let jsonTree = this.createTree();
    dTree.init(jsonTree,  {
      target: "#graph",
      debug: true,
      //height: 800,
      //width: "100%",
      callbacks: {
        nodeClick: function(name, extra) {
          alert('Click: ' + name);
        },
        nodeRightClick: function(name, extra) {
          alert('Right-click: ' + name);
        },
        textRenderer: function(name, extra, textClass) {
          if (extra && extra.dates)
            name = name + " <br />(" + extra.dates + ")";
          return "<p align='center' class='" + textClass + "'>" + name + "</p>";
        }
      }
    });
  }
}

class person {
  name: String
  class: String
  textClass: String
  extra: extra
  marriages: marriage[]

  constructor(name: String, cssclass?: String, textClass?: String, extra?: extra, marriages?: marriage[]) {
    this.name = name;
    this.class = cssclass;
    this.textClass = textClass;
    this.extra = extra;
    this.marriages = marriages ? marriages : [];
  }
}

class extra {
  dates: String

  constructor(dob?: Date, dod?: Date) {
    if(dob) {
      if(dod) {
        this.dates = `${dob.getFullYear()} - ${dod.getFullYear()}`;
      } else {
        this.dates = dob.getFullYear().toString();
      }
    } else {
      this.dates = '';
    }    
  }
}

class marriage {
  spouse: person
  children: person[]

  constructor(spouse: person, children?: person[]) {
    this.spouse = spouse;
    this.children = children ? children : [];
  }
}
