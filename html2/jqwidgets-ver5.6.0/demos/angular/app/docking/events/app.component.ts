﻿import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDockingComponent } from '../../../jqwidgets-ts/angular_jqxdocking';
import { jqxPanelComponent } from '../../../jqwidgets-ts/angular_jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myDocking') myDocking; jqxDockingComponent;
    @ViewChild('myPanel') myPanel; jqxPanelComponent;

    ngAfterViewInit(): void {
        this.myDocking.hideAllCloseButtons();
        this.myPanel.elementRef.nativeElement.firstChild.style.border = 'none';
    }

    myDockingOnDragEnd(event: any): void {
        this.displayEvent(event);
    };

    myDockingOnDragStart(event: any): void {
        this.myPanel.clearcontent();
        this.displayEvent(event);
    };

    capitalizeFirstLetter(string: string): string {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    displayEvent(event: any): void {
        let windowID = event.args.window;
        let windowHeader = document.getElementById(windowID).children[0].firstChild.textContent;

        let eventData = 'Event: <span style="font-style: italic;">' + this.capitalizeFirstLetter(event.type) + '</span>';
        eventData += ' <strong>' + windowHeader + '</strong>';

        this.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
    }
}
