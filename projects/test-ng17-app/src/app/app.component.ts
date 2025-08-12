import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-ng17-app';
  avatarImgSrc =
    'https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg';

  openModal(): void {
    (
      document.getElementById('my_modal_1ulsp') as HTMLDialogElement
    )?.showModal();
  }

  closeModal(): void {
    (document.getElementById('my_modal_1ulsp') as HTMLDialogElement)?.close();
  }
}
