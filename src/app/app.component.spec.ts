import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
  // it(`should have as title 'app-awesome'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app-awesome');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app-awesome!');
  // }));
});



describe('Test Suite For App Component', ()=>{
let component;
let objx;
// Arranging
 beforeEach(()=>{
  TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [ReactiveFormsModule]
  }).compileComponents();
  component = TestBed.createComponent(AppComponent);
  objx = component.debugElement.componentInstance;
 })

  it('Title Variable should have app-awesome', ()=>{
    
    
    
    component.detectChanges();
    // Assert
    expect(objx.title).toEqual('app-awesome');
    
  })

  it('Change Function should change title value to app-cool', function(){
    objx.change(); //Act 
    expect(objx.title).toEqual('app-cool'); //Assert
  })

  it('TestingForm', ()=>{
    expect(objx.userForm).toBeTruthy();
  })

  it('Testing name control', ()=>{
    expect(objx.userForm.get('name')).toBeTruthy();
  })


  it('Name control should have Raj', ()=>{
    objx.change(); // Action
    expect(objx.userForm.get('name').value).toEqual('Raj'); // Assert
  })
})