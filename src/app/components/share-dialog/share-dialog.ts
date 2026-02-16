import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { Friend } from '../../models/friend';
import { MatFormField, MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-share-dialog',
    standalone: true,
    imports: [CommonModule,
        MatListModule,
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,
        MatDialogActions,
        MatDialogContent,
        MatDialogTitle,
        MatInputModule,
        MatFormField],
    templateUrl: './share-dialog.html',
    styleUrls: ['./share-dialog.scss']
})
export class ShareDialog {
    friends: Friend[] = [];
    selected = new Set<number>();

    constructor(
        public dialogRef: MatDialogRef<ShareDialog>,
        @Inject(MAT_DIALOG_DATA) public data: { friends: Friend[] }
    ) {
        this.friends = data?.friends || [];
    }

    toggle(id: number, checked: boolean) {
        if (checked) this.selected.add(id);
        else this.selected.delete(id);
    }

    isSelected(id: number) {
        return this.selected.has(id);
    }

    done() {
        this.dialogRef.close(Array.from(this.selected));
    }
}
