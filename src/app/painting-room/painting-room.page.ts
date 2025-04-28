import { Component, ViewChild, OnInit } from '@angular/core';
import { AlertController, Platform, RangeCustomEvent, NavController} from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { ControlContainer } from '@angular/forms';
@Component({
  selector: 'app-painting-room',
  templateUrl: './painting-room.page.html',
  styleUrls: ['./painting-room.page.scss'],
})
export class PaintingRoomPage implements OnInit {

  @ViewChild('imagemCanvas', { static: false }) canvas: any;
  /*TURN INTO PORTUGUESE*/
  posicao_X: any;
  posicao_Y: any;
  indiceAtualPaleta: any;
  elementoCanvas: any;
  contextoCanvas: any;
  EstadoPincel: number;
  paletas: {nome: String, cores: any[]}[];
  valorRange!: RangeValue;
  coresAtuais:any[];  
  estaDesenhando = false;
  corSelecionada: any;

  onIonChange(eventoDisparado: Event) {
    this.valorRange = (eventoDisparado as RangeCustomEvent).detail.value;
    this.elementoCanvas.getContext("2d").lineWidth = this.valorRange;
  }


  constructor(public controladorNav: NavController, private platform: Platform, public gerenciadorAlerta: AlertController) {
    this.indiceAtualPaleta = 0;

    this.paletas = [];
    this.paletas.push({nome: "Cores Padrão", cores: ["#000000", "#f5f5f5", "#ff0000", "#ff00ff", "#0000ff", "#00ffff", "#00ff00", "#ffff00"]});
    this.paletas.push({nome: "Cores Pastel", cores: ["#ff6565", "#ff6584", "#ff65f4", "#ad65ff", "#656bff", "#65ffcc", "#6bff63", "#99dd92"]});
    this.paletas.push({nome: "Cores Quentes ", cores: ["#DD0905", "#E7317B", "#FF99E2", "#FE5F01", "#E33079", "#FEFF99", "#FFB20C", "#81001F"]});
    this.paletas.push({nome: "Cores Frias ", cores: ["#51BE36", "#7FD6FA", "#5A20CF", "#49833D", "#11C6EF", "#BC9EC7", "#3DDFCA", "#B48DEB"]});

    this.coresAtuais = this.paletas[this.indiceAtualPaleta].cores;
    this.EstadoPincel = 0;
    this.corSelecionada = this.paletas[0].cores[0];    
  }

  limparCanvas()
  {
    this.contextoCanvas.clearRect(0, 0, this.elementoCanvas.width, this.elementoCanvas.height);
  }

 
  

  ngOnInit()
  {
  }

  pinFormatter(value: number) {
    return `${value}`;
  }


  ngAfterViewInit() {    
    this.elementoCanvas = this.canvas.nativeElement;
    this.elementoCanvas.width = this.platform.width() + '';
    this.elementoCanvas.height = 700;

    this.contextoCanvas = this.elementoCanvas.getContext("2d");
    this.valorRange = 25;
    this.contextoCanvas.lineWidth = this.valorRange;
  }

  comecar(beginEvent: any) {
    this.estaDesenhando = true;
    this.atualizarDados_Pincel();
    this.atualizarPosicao(beginEvent);
    this.escolher_e_pintarComPincelAtual(this.posicao_X, this.posicao_Y);

  }

  desenhar(eventoDisparado: any) {
    if (!this.estaDesenhando) return;

    this.atualizarPosicao(eventoDisparado);    
    this.atualizarDados_Pincel();     
    this.escolher_e_pintarComPincelAtual(this.posicao_X, this.posicao_Y);             
  }

  parar() {
    this.estaDesenhando = false;    
  }  

  atualizarDados_Pincel()
  {
    this.contextoCanvas.strokeStyle = this.corSelecionada;
    this.contextoCanvas.fillStyle= this.corSelecionada;
    this.contextoCanvas.lineWidth = this.valorRange;
  }

  escolher_e_pintarComPincelAtual(posicaoX:number, posicaoY:number)
  {
    this.contextoCanvas.moveTo(this.posicao_X, this.posicao_Y);
    this.contextoCanvas.beginPath();

    switch (this.EstadoPincel) {
      case 0:
        this.contextoCanvas.globalCompositeOperation = "source-over";    
        this.contextoCanvas.arc(posicaoX, posicaoY, this.contextoCanvas.lineWidth, 0, 2 * Math.PI);  
        break;
    
        case 1:
          this.contextoCanvas.globalCompositeOperation = "source-over";
          this.contextoCanvas.rect(posicaoX, posicaoY, this.contextoCanvas.lineWidth, this.contextoCanvas.lineWidth);   
        break;

        case 2: 
        this.contextoCanvas.globalCompositeOperation = "destination-out";  
        this.contextoCanvas.arc(posicaoX, posicaoY, this.contextoCanvas.lineWidth, 0, 2 * Math.PI);  
        break;

        case 3:
        this.contextoCanvas.globalCompositeOperation = "source-over";  
        //#region  Criação do svg e atribuição ao divContainer
        
          let svgEmString = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
          <svg
             width="220.95311"
             height="200"
             viewBox="0 0 58.460508 52.916665"
             version="1.1"
             id="svg978"
             xml:space="preserve"
             sodipodi:docname="mf kijetesantakalu.svg"
             inkscape:version="1.2.2 (732a01da63, 2022-12-09)"
             xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
             xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview
               id="namedview16"
               pagecolor="#ffffff"
               bordercolor="#000000"
               borderopacity="0.25"
               inkscape:showpageshadow="2"
               inkscape:pageopacity="0.0"
               inkscape:pagecheckerboard="0"
               inkscape:deskcolor="#d1d1d1"
               showgrid="false"
               inkscape:zoom="1.7835294"
               inkscape:cx="136.80739"
               inkscape:cy="91.95251"
               inkscape:window-width="1440"
               inkscape:window-height="837"
               inkscape:window-x="-8"
               inkscape:window-y="-8"
               inkscape:window-maximized="1"
               inkscape:current-layer="svg978" /><defs
               id="defs975" /><path
               id="path1405"
               style="font-size:273.277px;line-height:1.25;font-family:'linja pona 4.2';-inkscape-font-specification:'linja pona 4.2, ';mix-blend-mode:normal;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:1.7545"
               inkscape:label="kijetesantakalu-layer"
               d="M 39.511795,-1.4202271e-7 C 39.231075,-1.4202271e-7 32.984893,0.07035086 26.668656,4.140833 17.61537,9.9658155 14.176097,20.282529 13.965555,30.528885 H 11.299051 C 4.0704613,30.528885 0,35.722091 0,42.459422 0,48.775666 3.2283899,52.916664 9.5446371,52.916664 H 31.6513 l -3.57963,-12.3517 -3.29799,0.911573 2.245858,8.001061 H 17.404622 V 32.283299 c 0,-13.82556 5.684607,-26.7390362 20.773406,-28.6339094 l 1.262974,4.9128789 13.12375,10.5270055 -7.509108,4.983158 v 28.563113 h 3.439073 V 25.966889 L 58.460508,19.369876 42.529187,6.5975299 40.845052,-1.4202271e-7 Z M 31.230138,13.404866 c -1.824692,0 -3.368789,1.47381 -3.368789,3.298506 0,1.894878 1.544097,3.36827 3.368789,3.36827 1.824692,0 3.298506,-1.473392 3.298506,-3.36827 0,-1.824696 -1.473814,-3.298506 -3.298506,-3.298506 z m 9.33431,0 c -1.894879,0 -3.368789,1.47381 -3.368789,3.298506 0,1.894878 1.47391,3.36827 3.368789,3.36827 1.824692,0 3.298506,-1.473392 3.298506,-3.36827 0,-1.824696 -1.473814,-3.298506 -3.298506,-3.298506 z M 10.737329,34.037714 h 0.561722 2.666504 V 49.477598 H 10.737329 Z M 7.2279827,34.949803 V 49.126715 C 4.2102194,48.14419 3.4385495,45.477183 3.4385495,42.459422 c 0,-3.087943 1.0523934,-5.965649 3.7894332,-7.509619 z m 29.8271193,3.158464 v 14.527278 h 3.439063 V 38.108267 Z" /></svg>`;
          const divContainerSVG = document.createElement('div');
          divContainerSVG.innerHTML = svgEmString;
          divContainerSVG.querySelector('svg')?.querySelector('path')?.setAttribute("style", "font-size:273.277px;line-height:1.25;font-family:'linja pona 4.2';-inkscape-font-specification:'linja pona 4.2, ';mix-blend-mode:normal;fill:" + this.corSelecionada + ";fill-opacity:1;fill-rule:evenodd;stroke-width:1.7545");
          document.body.appendChild(divContainerSVG);
          const imagem_Kijetesantakalu = new Image();
          imagem_Kijetesantakalu.src = 'data:image/svg+xml;base64,' + btoa(divContainerSVG.innerHTML);
          //#endregion
        this.contextoCanvas.drawImage(imagem_Kijetesantakalu, posicaoX - (this.contextoCanvas.lineWidth * 0.4), posicaoY - (this.contextoCanvas.lineWidth * 0.4), this.contextoCanvas.lineWidth, this.contextoCanvas.lineWidth);
      break;

      default:
        this.contextoCanvas.globalCompositeOperation = "source-over";    
        this.contextoCanvas.arc(posicaoX, posicaoY, this.contextoCanvas.lineWidth, 0, 2 * Math.PI);  
        break;        
    }

    this.contextoCanvas.closePath();
    this.contextoCanvas.fill();
  }

  atualizarPosicao(eventoAcionado: any)
  {
    var posicaoCanvas = this.elementoCanvas.getBoundingClientRect();

    if(eventoAcionado.type == "mousedown" || eventoAcionado.type == "mousemove")
    {
        this.posicao_X = eventoAcionado.x- posicaoCanvas.x;
        this.posicao_Y = eventoAcionado.y- posicaoCanvas.y;
    }
    if(eventoAcionado.type == "touchstart" || eventoAcionado.type == "touchmove")
    {
      this.posicao_X = eventoAcionado.touches[0].pageX - posicaoCanvas.x;
      this.posicao_Y = eventoAcionado.touches[0].pageY - posicaoCanvas.y;
    }
  }  

  mudarValor_ModoPincel(novoValor:number)
  {
    this.EstadoPincel = novoValor;
  }

  salvar(nomeArquivo: any)
  {
    var novoElemento = document.createElement('a');
    var imagemDoCanvasEmURL = this.elementoCanvas.toDataURL();
    novoElemento.href = imagemDoCanvasEmURL;    

    novoElemento.download = nomeArquivo;
    novoElemento.click(); 
  }

  adicionarValor_indiceDaPaletaAtual(valorAdicionado: number)
  {
    if (this.indiceAtualPaleta + valorAdicionado < 0 || this.indiceAtualPaleta + valorAdicionado > (this.paletas.length - 1)) {
      return;
    }
    else
    {
      this.indiceAtualPaleta += valorAdicionado;
      this.atualizarValor_coresAtuais();
    }
  }

  atualizarValor_coresAtuais()
  {
    this.coresAtuais = this.paletas[this.indiceAtualPaleta].cores;
  }

  isNOTInTheBrushStyle(queryBrushStyle: number)
  {
    if (this.EstadoPincel != queryBrushStyle) {
      return true;
    }
    else{
      return false;
    }
  }

  salvarCanvas(nomeArquivo: string) {
  
    var novoElemento = document.createElement('a');
    var canvasUrlImage = this.elementoCanvas.toDataURL();
    novoElemento.href = canvasUrlImage;

    novoElemento.download = nomeArquivo;

    novoElemento.click(); 
  }

  async ExibirNomeacao_ArquivoCanvas()
  {
    const alerta = await this.gerenciadorAlerta.create(
      {
        header: "Dê um nome a sua Obra-Prima:",
        inputs: [
          {
            label: 'Insira o nome da sua Obra-Prima'
          }
        ],
        buttons: [
          {
            text: 'OK',
            handler: (data:any) => {
             this.salvarCanvas(data[0]);
             this.controladorNav.navigateForward('home');
            },
          },
          {
            text: 'CANCELAR',
            role: 'cancel'
          },
        ],
        
      }
    )

    alerta.present();
  }



  async ExibirConfirmacao_ApagarTela()
  {
    const alerta = await this.gerenciadorAlerta.create(
      {
        header: "Apagar Tela de Pintura",
        message: "Você tem certeza que quer apagar sua tela de pintura? Esse processo não pode ser revertido.",
        buttons: [
          {
            text: 'OK',
            handler: (data) => {
             this.limparCanvas();
            },
          },
          {
            text: 'CANCELAR',
            role: 'cancel'
          },
        ],
        
      }
    )

    alerta.present();
  }

  async ExibirConfirmacao_SairPagina()
  {
    const alerta = await this.gerenciadorAlerta.create(
      {
        header: "Voltar Para Página Inicial",
        message: "Você tem certeza que quer voltar para a Tela inicial? Você não salvou sua arte, gostaria de salvá-la antes de sair.",
        buttons: [
          {
            text: 'Sair sem salvar',
            handler: (data) => {
              this.controladorNav.navigateForward('home');
            },
          },
          {
            text: 'Sair e salvar',
            handler: (data) => {
              this.ExibirNomeacao_ArquivoCanvas();
              this.controladorNav.navigateForward('home');
            },
          },
          {
            text: 'CANCELAR',
            role: 'cancel'
          },
        ],
        
      }
    )

    alerta.present();
  }

}
