import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Status = 'In progress' | 'Completed' | 'Pending approval' | 'Proposed';
interface Project { id: string; name: string; location: string; category: string; amount: string; status: Status; progress: number; icon: string; tone: string; }
@Component({selector:'app-root', standalone:true, imports:[CommonModule,FormsModule], templateUrl:'./app.component.html', styleUrl:'./app.component.css'})
export class AppComponent {
  hindi = false;
  menuOpen = false;
  requestOpen = false;
  submitted = false;
  selectedCategory = 'All';
  search = '';
  request = { name:'', village:'', issue:'' };
  categories = [ {name:'Roads',icon:'↗',tone:'peach'}, {name:'Water',icon:'◉',tone:'blue'}, {name:'Education',icon:'▤',tone:'purple'}, {name:'Healthcare',icon:'✚',tone:'pink'}, {name:'Electricity',icon:'ϟ',tone:'yellow'}, {name:'Community',icon:'⌂',tone:'green'} ];
  projects:Project[] = [
    {id:'CV-001',name:'Village link road improvement',location:'Sample Village · Ward 04',category:'Roads',amount:'₹11.80 lakh',status:'In progress',progress:65,icon:'↗',tone:'peach'},
    {id:'CV-002',name:'Community drinking water point',location:'Sample Panchayat · Ward 02',category:'Water',amount:'₹8.50 lakh',status:'Completed',progress:100,icon:'◉',tone:'blue'},
    {id:'CV-003',name:'Primary school classroom repair',location:'Sample Village · Ward 09',category:'Education',amount:'₹6.20 lakh',status:'Pending approval',progress:0,icon:'▤',tone:'purple'},
    {id:'CV-004',name:'Health sub-centre upgrades',location:'Sample Panchayat · Ward 01',category:'Healthcare',amount:'₹14.00 lakh',status:'Proposed',progress:0,icon:'✚',tone:'pink'}
  ];
  get filteredProjects():Project[] { const q=this.search.trim().toLowerCase(); return this.projects.filter(p=>(this.selectedCategory==='All'||p.category===this.selectedCategory)&&(!q||`${p.name} ${p.location} ${p.id}`.toLowerCase().includes(q))); }
  selectCategory(name:string):void { this.selectedCategory=name; document.getElementById('projects')?.scrollIntoView({behavior:'smooth'}); }
  openRequest():void { this.submitted=false; this.requestOpen=true; this.menuOpen=false; }
  submitRequest():void { if(this.request.name.trim()&&this.request.village.trim()&&this.request.issue.trim()){this.submitted=true;this.request={name:'',village:'',issue:''};} }
}
