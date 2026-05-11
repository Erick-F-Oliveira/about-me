// 1. Importe as bibliotecas (assumindo que você instalou via npm)
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Gio from '@girs/node-gio-2.0';

const Globe = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 2. Inicializa o controlador no container HTML
    const controller = new GIO.Controller(containerRef.current);
    
    // 3. AQUI É O SEGREDO: Adicionar a textura do seu mundo
    //    Em vez de usar o mapa-múndi padrão, você vai substituir pela sua imagem.
    //    (Consulte a documentação do Gio.js para a sintaxe exata de addImage ou similar)
    // controller.addImage('sua_textura.png');
    
    controller.addData(seus_dados); // para adicionar pontos de interesse
    controller.init();

    // Limpeza ao desmontar o componente
    return () => controller.destroy();
  }, []);

  // 4. O container onde o globo vai aparecer
  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default Globe;