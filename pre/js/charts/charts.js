import { setChartHeight } from '../modules/height';
import { setChartCanvas, setChartCanvasImage } from '../modules/canvas-image';
import { setRRSSLinks } from '../modules/rrss';
import { setFixedIframeUrl } from './chart_helpers';

export function initChart() {
    //Iframe
    setFixedIframeUrl('informe_perfil_mayores_2022_economia_3_1_tabla','pensiones_contributivas');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('pensiones_contributivas');

    //Captura de pantalla de la visualización
    setTimeout(() => {
        setChartCanvas();
    }, 3000);

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('pensiones_contributivas');
    });

    //Altura del frame
    setChartHeight();
}