import { MessageComponent } from './message/message.component';
import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, ContentChild, AfterContentInit, ContentChildren } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit, AfterViewInit, AfterContentInit {

  messageList: string[] = [
    'message 1',
    'message 2',
    'message 3',
    'message 4'
  ];

  @ViewChild(MessageComponent)
  firstMessageComponent: MessageComponent = new MessageComponent;

  @ViewChildren(MessageComponent)
  allMessageComponents: QueryList<MessageComponent> = new QueryList;

  @ContentChild('defaultMessage')
  defaultContentChild: MessageComponent = new MessageComponent;

  @ContentChild(MessageComponent)
  firstContentChild: MessageComponent = new MessageComponent;

  @ContentChildren(MessageComponent)
  allContentChildren: QueryList<MessageComponent> = new QueryList;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.firstMessageComponent.message = "This message is updated using ViewChild.";
    this.allMessageComponents.forEach(message => {
      message.message = "This message is updated using ViewChildren."
    });
  }

  ngAfterContentInit() {
    // this.firstContentChild.message = "This message is updated using ContentChild.";
    // this.allContentChildren.forEach(contentChild => {
    //   contentChild.message = "This message is updated using ContentChildren.";
    // });  
    this.defaultContentChild.message = "This message is updated using ContentChild.";
  }

}
