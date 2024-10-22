import { Controller } from "@nestjs/common";
export class Agente {
  private llamarAgente: string =
    "En un momento lo atenderá un funcionario *🟢IN🔵* ";

  constructor() {}

  public get() {
    return this.llamarAgente;
  }
}
