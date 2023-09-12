import React,{Component} from 'react';

class Footer extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return(

            <div class="pt-4 my-md-5 pt-md-5 border-top">
            <div class="row">
              <div class="col-12 col-md">
                <small class="d-block mb-3 text-muted">&copy; 2023</small>
              </div>
              <div class="col-6 col-md">
                <h5>Features</h5>
                <ul class="list-unstyled text-small">
                  <li><a class="text-muted" href="#">Informações sobre simulação</a></li>
                  <li><a class="text-muted" href="#">Testes</a></li>
                  <li><a class="text-muted" href="#">Recursos para times</a></li>
                  <li><a class="text-muted" href="#">Coisas para desenvolvedores</a></li>
                  <li><a class="text-muted" href="#">Último item</a></li>
                </ul>
              </div>
              <div class="col-6 col-md">
                <h5>Módulos</h5>
                <ul class="list-unstyled text-small">
                  <li><a class="text-muted" href="#">Simulações</a></li>
                  <li><a class="text-muted" href="#">Fornecedores</a></li>
                  <li><a class="text-muted" href="#">Resultados</a></li>
                  <li><a class="text-muted" href="#">Otimização</a></li>
                </ul>
              </div>
              <div class="col-6 col-md">
                <h5>Sobre</h5>
                <ul class="list-unstyled text-small">
                  <li><a class="text-muted" href="#">Equipe</a></li>
                  <li><a class="text-muted" href="#">Locais</a></li>
                  <li><a class="text-muted" href="#">Privacidade</a></li>
                  <li><a class="text-muted" href="#">Termos</a></li>
                </ul>
              </div>
            </div>
          </div>

        );
    }
}

export default Footer;