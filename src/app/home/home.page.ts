import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  rd = "0-10";
  food = "สุ่ม";

  shayar_list = [];
  title_type = [];
  food_list = [];
  selectedRadioGroup: any;
  defaultSelectedRadio = 1;
  randomCard: [];

  constructor(public navCtrl: NavController) {
    //#region color
    this.shayar_list = [{
      title: this.getRandomColor(),
      color: this.getRandomColor(),
    }];
    //#endregion

    //#region food
    this.food_list = [{
      name: "กระเพราหมูสับ+ไข่ดาว",
    },
    {
      name: "มาม่า",
    },
    {
      name: "ก๋วยเตี๋ยว",
    }];
    //#endregion

    //#region title
    this.title_type = [{
      id: '1',
      name: 'color',
      namethai: 'สี',
      value: 'color',
      text: 'One',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '2',
      name: 'number',
      value: 'number',
      namethai: 'ตัวเลข',
      text: 'Two',
      disabled: false,
      checked: true,
      color: 'secondary'
    }, {
      id: '3',
      name: 'food',
      value: 'food',
      namethai: 'อาหาร',
      text: 'Three',
      disabled: false,
      checked: false,
      color: 'danger'
    },
    {
      id: '4',
      name: 'custom',
      value: 'custom',
      namethai: 'กำหนดเอง',
      text: 'foue',
      disabled: false,
      checked: false,
      color: 'warning'
    },
    ];
    //#endregion
  }

  //#region title
  radioGroupChange(event) {
    console.log(event.detail.value);
    this.selectedRadioGroup = event.detail.value;
  }

  radioFocus() {
    console.log("radioFocus");
  }
  //#endregion

  //#region color
  changecolor(color) {
    console.log(color);
    this.shayar_list = [{
      title: color,
      color: color,
    }];
  }

  getRandomColor() {
    var color = "#";
    for (var i = 0; i < 3; i++) {
      var part = Math.round(Math.random() * 255).toString(16);
      color += (part.length > 1) ? part : "0" + part;
    }
    console.log(color);
    this.changecolor(color);
    return color;
  }

  //#endregion

  //#region food
  getRandomFood() {
    let rd = Math.floor(Math.random() * this.food_list.length);
    this.food = this.food_list[rd].name;
    console.log(this.food);
    console.log(rd);
  }
  //#endregion

  //#region number
  getRandomNumber() {
    var list = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}]
    var rand = Math.floor(Math.random() * list.length);
    this.rd = rand.toString();
  }
  //#endregion
}
