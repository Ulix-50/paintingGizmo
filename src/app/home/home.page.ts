import { Component, ViewChild } from '@angular/core';
import { AlertController, Platform, RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ngAfterViewInit()
  {
    this.listarArquivosEmDocuments();
  }

  toggleDarkTheme() {
    document.body.classList.toggle('dark', false);
  }

  async listarArquivosEmDocuments() {
    try {
      const directory = Directory.Documents;
      const files = await Filesystem.readdir({
        path: '/',
        directory: Directory.Documents,
      });
      console.log('Arquivos em Documents:', files);
    } catch (error) {
      
    }
  }
}
/*  
async createFolders()
  {
    try {
      const readDirResult = await Filesystem.readdir({
        path: "/Photos",
        directory: Directory.Documents
      });
      console.log("Conseguiu ler photos \n photos:");
      const readDirResult_ = await Filesystem.readdir({
        path: "",
        directory: Directory.Documents
      });
      console.log(readDirResult);
      console.log(readDirResult_);
    } catch (error) {
      const makeDirResult = await Filesystem.mkdir({
        path: "/Photos",
        directory: Directory.Documents
      });

      console.log("Teve de fazer a pasta do Photos \n" + error)
    }
    

      
  }
  async takePicture(){
  this.stopAnimatingImageSequence()
  this.petCurrentImage_Path = "../../assets/cameraPose.png"
  
  
  this.image = await Camera.getPhoto({
  quality: 90,       
  allowEditing: true,      
  resultType: CameraResultType.DataUrl});
    
      
  this.imageUrl = this.image.dataUrl;
  let currentDate = new Date();
  let newPhoto_Directory  = '/Photos/'
  let newPhoto_FileName = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}_${currentDate.getHours()}-${currentDate.getMinutes()}-${currentDate.getSeconds()}-${currentDate.getMilliseconds()}.png`;

  await Filesystem.writeFile({
    path: newPhoto_Directory + newPhoto_FileName,  
    data: this.image.dataUrl!,
    directory: Directory.Documents,     
  });
  setTimeout(()=>{
  this.changeAnimation("idle",75);
  this.animateImageSequence();
  }, 1000);
} 
*/


