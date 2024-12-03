import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component'; // Ajuste para o AppComponent
import { routes } from './app/app.routes';
const appConfig = {
  providers: [
    provideHttpClient(), // Configuração global do HttpClient
    provideRouter(routes), // Fornecendo as rotas definidas no arquivo 'app.routes.ts'
  ],
};

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
