export default class Estadia{
    constructor(data, horaEntrada, horaSaida, veiculo) {
    this.data = data;
    this.horaEntrada = parseInt(horaEntrada);
    this.horaSaida = parseInt(horaSaida);
    this.veiculo = veiculo;
    this.valorEstadia = 0;
  }
   calcularEstadia(valorHora) {
    let horas = this.horaSaida - this.horaEntrada;
    this.valorEstadia = horas * valorHora;
  }
}