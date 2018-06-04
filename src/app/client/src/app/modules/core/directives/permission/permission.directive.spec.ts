import { mockUserData } from './../../services/user/user.mock.spec.data';
import { PermissionDirective } from './permission.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, Directive, ElementRef, Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConfigService, ResourceService, ToasterService } from '@sunbird/shared';
import { UserService, LearnerService, PermissionService, ContentService, CoreModule } from '@sunbird/core';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { TelemetryModule, TelemetryService } from '@sunbird/telemetry';

@Component({
  template: `<a appPermission id="permission" [permission]= 'adminDashboard'
  href="#">dashboard</a>`
})
class TestWrapperComponent {
  adminDashboard = [];
}
describe('PermissionDirective', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, Ng2IziToastModule, TelemetryModule],
      declarations: [PermissionDirective, TestWrapperComponent],
      providers: [ToasterService, ResourceService, PermissionService, UserService, ContentService,
        ConfigService, LearnerService, HttpClient, TelemetryService]
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
  });
  it('should create an instance', () => {
    fixture.detectChanges();
  });
});
