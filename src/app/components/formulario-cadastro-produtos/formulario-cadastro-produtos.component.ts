import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import {CategoriasProdutos} from 'src/app/interfaces/CategoriasProdutos';
import { Produto } from 'src/app/interfaces/Produto';

@Component({
  selector: 'app-formulario-cadastro-produtos',
  templateUrl: './formulario-cadastro-produtos.component.html',
  styleUrls: ['./formulario-cadastro-produtos.component.css']
})
export class FormularioCadastroProdutosComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Produto>();
  @Input() produtoData: Produto | null = null;
  @Input() btnText!: string;

  produtoForm!: FormGroup;

  
  
  categoriasFilmes : CategoriasProdutos[] =  [
    
    {id: "1", name : "Aventura"},   
    {id: "2", name : "Drama"}, 
    {id: "3", name : "Família"},    
    {id: "4", name : "Ficção Científica"},
    {id: "5", name : "Musical"},    
    {id: "6", name : "Romance"},      
    {id: "7", name : "Séries"},      
    {id: "8", name : "Suspense"},    
    {id: "9", name : "Terror"},  
    {id: "10", name : "Mais Vendidos"},
    {id: "11", name : "Mais Procurados"}
    
  ]


  constructor() {
   }

  ngOnInit(): void {

    this.produtoForm = new FormGroup({
      titulo: new FormControl('',[Validators.required]),
      subtitulo: new FormControl(''),
      image: new FormControl('')
    })

  }

  get titulo(){
    return this.produtoForm.get('titulo')!
  }

  onFileSelected(event: any){

    const file: File = event.target.files[0]

    this.produtoForm.patchValue({image: file})

  }

  submit_produto(){
    if(!this.produtoForm.invalid){     /* Não enviar até que todos os campos estejam preenchidos*/ 
      console.log("envia formulário produto!")
      console.log(this.produtoForm.value)
      this.onSubmit.emit(this.produtoForm.value)
    }
  }



}
