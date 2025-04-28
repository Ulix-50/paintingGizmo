import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';

@Component({
  selector: 'app-debug-page',
  templateUrl: './debug-page.page.html',
  styleUrls: ['./debug-page.page.scss'],
})
export class DebugPagePage implements OnInit {
//IDEIA: APÓS A DATA, QUE USA -, USA _  OU DOIS UNDERLINES ANTES DO NOME DA "OBRA PRIMA" PRA ASSIM SEPARAR OS DADOS DE DATA E NOME
  dadosImagem:any;
  constructor() { 
    
  }

  ngOnInit() {}

  ngAfterViewInit()
  {
  if(!localStorage.getItem("foldersAlreadyExist"))
    { 
    this.CreateFolders();
    localStorage.setItem("foldersAlreadyExist","true");
    }  
  }


  async CreateFolders()
  {
    await Filesystem.mkdir({
      path: "/Images",
      directory: Directory.Documents
    });
  }

  DoIt(){
    console.log("About to do it...");
    this.seeFolder();
  }

  async seeFolder() {
    const readDirResult = await Filesystem.readdir({
    path: "",
    directory: Directory.Documents
  });
  console.log(readDirResult);}


}
  
/*  ESCRITA/LEITURA DE PASTAS E ARQUIVOS 
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

  async getAllPhotos()
  {

    
    let directory = await Filesystem.readdir({
      path: this.photosDirectory,
      directory: Directory.Documents
    });
    for(let i = 0; i < directory.files.length; i++)
    {      
      if(directory.files[i].type == 'file')
      {      
        let fileResult = await Filesystem.readFile({
          path: this.photosDirectory+ directory.files[i].name,
          directory: Directory.Documents
        })
        this.photos_src[i] =`data:image/png;base64,${fileResult.data}`;
      } 
    }
  }

}

*/






//   async selecionarImagem()
//   {
//     const imagem = await Camera.getPhoto({
//       quality: 90,
//       allowEditing: false,
//       resultType: CameraResultType.DataUrl,
//       source: CameraSource.Photos
//     })

//     this.dadosImagem = imagem.dataUrl;
//     console.log(imagem);
//   }


// }

// async salvarImagem()
// {
//   const nomeArquivo = new Date().getDate() + '.jpg';
//   const imagemSalva = await Filesystem.writeFile({
//     directory: Directory.Data,
//     path: `${this.caminhoArquivos}/${nomeArquivo}`,
//     data: this.dadosImagem
//   });
// }





/**
 * <ion-list>

      <ion-row>
        <ion-col *ngFor="let cor of cores" [style.background]="cor"></ion-col>
      </ion-row>



      <ion-radio-group [(ngModel)]="corSelecionada">

        <ion-row>
          <ion-col *ngFor="let cor of cores" style="text-align: center;">
            <ion-radio [value]="cor"></ion-radio>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="1">
            <ion-button fill="clear" color="dark" (click)="debug()"> <!-- UE BRASIL O ONCLICK ***NÃO*** FUNCIONA-->
              <ion-icon name="caret-back-outline"> </ion-icon>
            </ion-button>
          </ion-col>

          <ion-col (click)="debug()" size="9">
            <!--"textoPaleta" VAI DESLIZAR PARA O LADO, DEIXANDO O PRÓXIMO TEXTO APARECER NUMA ANIMAÇÃO F -->
            <strong id="textoPaleta"> Padrão </strong>
          </ion-col>

          <ion-col size="2">
            <ion-button fill="clear" color="dark" (click)="debug()">
              <ion-icon name="caret-forward-outline"> </ion-icon>
            </ion-button>
          </ion-col>
        </ion-row>

      </ion-radio-group>

      <ion-row>
        <ion-range color="secondary" aria-label="Range with pin" [pin]="true" [pinFormatter]="pinFormatter"
          (ionChange)="onIonChange($event)">
          <ion-icon size="small" slot="start" name="brush-outline"></ion-icon>
          <ion-icon slot="end" name="brush-outline"></ion-icon>
        </ion-range>
      </ion-row>
    </ion-list>
 */
