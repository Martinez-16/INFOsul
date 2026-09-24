export default class Veiculo {
    constructor(placa, odometro, proprietario, categoria) {
    this.placa = placa;
    this.odometro = parseInt(odometro);
    this.proprietario = proprietario;
    this.categoria = categoria;
  }
}