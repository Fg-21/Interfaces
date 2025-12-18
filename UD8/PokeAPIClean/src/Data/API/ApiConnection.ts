export class ApiConnection {
  private static readonly BASE_URL = "https://pokeapi.co/api/v2";

  public static getApiConnectionStringBase(): string {
    return this.BASE_URL;
  }
}