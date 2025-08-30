// Utilitário para carregamento otimizado de imagens
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

// Lista de imagens críticas para pré-carregamento
export const criticalImages = [
  '/src/assets/hero-law-office.jpg',
  '/src/assets/logotipo.jpg',
];

// Pré-carregar imagens críticas
export const preloadCriticalImages = async () => {
  try {
    await Promise.all(
      criticalImages.map(src => preloadImage(src))
    );
  } catch (error) {
    console.warn('Some critical images failed to preload:', error);
  }
};

// Verificar se a imagem existe
export const imageExists = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
};
