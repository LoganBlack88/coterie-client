import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    lastReload: Date;
    lastReloadDisplay = '0:00';

    ngOnInit(): void {
        this.lastReload = new Date();


        setInterval(this.tick.bind(this), 1000);
    }

    private tick() {

        const diff = Date.now() - this.lastReload.getTime();
        const mins = Math.floor(diff / (60000));
        const secs = diff > 60000 ? Math.floor((diff % 60000) / 1000) : Math.floor(diff / 1000);

        this.lastReloadDisplay = '' + mins + ':' + ((secs > 9) ? secs : '0' + secs);
    }

}
