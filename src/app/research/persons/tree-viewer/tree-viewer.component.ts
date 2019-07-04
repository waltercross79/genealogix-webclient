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
    var self = this.getPerson(this.data, 'graphroot', this.data.marriages);    
    return [self];

    // return [{
    //   "name": "Ladislav Kriz",
    // "class": "man node",
    // "textClass": "emphasis",
    // "extra": { 
    //   "dob": "03-18-1955"       
    // },
    // "marriages": [{
    //   "spouse": {
    //     "name": "Zdenka Stara",
    //     "class": "woman node",
    //     "extra": { 
    //       "dob": "05-18-1955"       
    //     }
    //   },
    //   "children": [{
    //     "name": "Ladislav Kriz Jr.",
    //     "class": "man node",
    //     "extra": { 
    //       "dob": "10-26-1979"       
    //     },
    //     "marriages": [{
    //       "spouse": {
    //         "name": "Sara Hadfield-Boenig",
    //         "class": "woman node",
    //         "extra": { 
    //           "dob": "12-26-1981"       
    //         }
    //       },
    //       "children": [{
    //         "name": "Naithan Hill",
    //         "class": "man node",
    //         "extra": { 
    //           "dob": "12-13-2002"       
    //         }       
    //       }, {
    //         "name": "Tallula",
    //         "class": "woman node",
    //         "extra": { 
    //           "dob": "01-01-2013"       
    //         }
    //       }]
    //     }]
    //   }, {
    //     "name": "Jakub Kriz",
    //     "class": "man node",
    //     "extra": { 
    //       "dob": "05-21-1985"       
    //     },
    //     "marriages": [{
    //       "spouse": {
    //         "name": "Tereza Stejskalova",
    //         "class": "woman node"
    //       },
    //       "children": [
    //         {
    //           "name": "Jonas Kriz",
    //           "class": "man node",
    //           "extra": { 
    //             "dob": "04-12-2019"       
    //           }
    //         }
    //       ]
    //     }]
    //   }]
    // }]
    // }];
  }

  ngAfterViewInit(): void {
    let jsonTree = this.createTree();
    dTree.init(jsonTree,  {
      target: "#graph",
      debug: true,
      height: 800,
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
