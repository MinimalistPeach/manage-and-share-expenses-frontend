import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { InvoiceCreatorService } from '../../services/invoice-creator';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialog } from '@angular/material/dialog';
import { ShareDialog } from '../share-dialog/share-dialog';
import { Friend } from '../../models/friend';

@Component({
  selector: 'app-invoice-details',
  imports: [MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatExpansionModule,
    ScrollingModule],
  templateUrl: './invoice-details.html',
  styleUrl: './invoice-details.scss',
})
export class InvoiceDetails {

  constructor(private readonly _invoiceCreatorService: InvoiceCreatorService, private readonly _dialog: MatDialog) { }

  public get invoiceItems() {
    return this._invoiceCreatorService.invoiceItems;
  }

  openShareDialog() {
    this._dialog.open(ShareDialog as any, {
      data: { friends: this._testFriends },
      width: '420px'
    });
  }

  private readonly _testFriends: Friend[] = [
    {
      id: 1,
      username: 'johnDoe#1234',
      name: 'John Doe',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 2,
      username: 'janeSmith#5678',
      name: 'Jane Smith',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 3,
      username: 'aliceJohnson#9012',
      name: 'Alice Johnson',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 4,
      username: 'bobBrown#3456',
      name: 'Bob Brown',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 5,
      username: 'charlieWilson#7890',
      name: 'Charlie Wilson',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 6,
      username: 'dianaDavis#1357',
      name: 'Diana Davis',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 7,
      username: 'edwardMiller#2468',
      name: 'Edward Miller',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 8,
      username: 'fionaGarcia#9753',
      name: 'Fiona Garcia',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 9,
      username: 'georgeTaylor#8642',
      name: 'George Taylor',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 10,
      username: 'helenAnderson#7531',
      name: 'Helen Anderson',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 11,
      username: 'ianThomas#6420',
      name: 'Ian Thomas',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 12,
      username: 'jessicaMartinez#5319',
      name: 'Jessica Martinez',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 13,
      username: 'kevinRodriguez#4208',
      name: 'Kevin Rodriguez',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 14,
      username: 'lauraLee#3197',
      name: 'Laura Lee',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 15,
      username: 'michaelWhite#2086',
      name: 'Michael White',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 16,
      username: 'nancyHarris#1975',
      name: 'Nancy Harris',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 17,
      username: 'oliverClark#0864',
      name: 'Oliver Clark',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 18,
      username: 'patriciaLewis#9753',
      name: 'Patricia Lewis',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 19,
      username: 'quinnWalker#8642',
      name: 'Quinn Walker',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 20,
      username: 'rachelHall#7531',
      name: 'Rachel Hall',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 21,
      username: 'stevenYoung#6420',
      name: 'Steven Young',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 22,
      username: 'tinaKing#5319',
      name: 'Tina King',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 23,
      username: 'ulyssesWright#4208',
      name: 'Ulysses Wright',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    },
    {
      id: 24,
      username: 'victoriaLopez#3197',
      name: 'Victoria Lopez',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg'
    }
  ];


  public addInvoiceItem() {
    this._invoiceCreatorService.addInvoiceItem({ id: this._invoiceCreatorService.getInvoiceLength(), name: '', price: 0, quantity: 1 });
  }

  public getInvoiceItemsCount() {
    return this._invoiceCreatorService.getInvoiceLength();
  }

  public deleteInvoiceItem(id: number) {
    this._invoiceCreatorService.deleteInvoiceItem(id);
  }

}
