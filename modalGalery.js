     // Array de URLs de imágenes (puedes cambiarlas por las tuyas)
     const images = [
        "./Img/Slider3.jpeg",
        "./Galery/IMH(1).jpeg",
        "./Galery/IMH(2).jpeg",
        "./Galery/IMH (3).jpeg",
        "./Galery/IMH (4).jpeg",
        "./Galery/IMH (5).jpeg",
        "./Galery/IMH (6).jpeg",
        "./Galery/IMH (7).jpeg",
        "./Galery/IMH (8).jpeg",
        "./Galery/IMH (9).jpeg",
        "./Galery/IMH (10).jpeg",
        "./Galery/IMH (11).jpeg",
        "./Galery/IMH (12).jpeg",
        "./Galery/IMH (13).jpeg",
        "./Galery/IMH (14).jpeg",
        "./Galery/IMH (15).jpeg",
        "./Galery/IMH (16).jpeg",
        "./Galery/IMH (17).jpeg",
        "./Galery/IMH (18).jpeg",
        "./Galery/IMH (19).jpeg",
        "./Galery/IMH (20).jpeg",
        "./Galery/IMH (21).jpeg",
        "./Galery/IMH (22).jpeg",
        "./Galery/IMH (23).jpeg",
        "./Galery/IMH (24).jpeg",
        "./Galery/IMH (25).jpeg",
        "./Galery/IMH (26).jpeg",
        "./Galery/IMH (28).jpeg",
        "./Galery/IMH (29).jpeg",
        "./Galery/IMH(30).jpg",
       
      ];
      
      // Función para cargar las imágenes en la galería
      function loadImages() {
        const gallery = document.getElementById("gallery");
      
        images.forEach((imageUrl) => {
          const imgElement = document.createElement("img");
          imgElement.src = imageUrl;
          imgElement.alt = "Imagen de la galería";
          gallery.appendChild(imgElement);
      
          // Agregar evento de clic a cada imagen
          imgElement.addEventListener("click", () => openModal(imageUrl));
        });
      }
      
      // Función para abrir el modal con la imagen seleccionada
      function openModal(imageUrl) {
        const modal = document.getElementById("modal");
        const modalImg = document.getElementById("modal-img");
      
        modal.style.display = "flex"; // Mostrar el modal
        modalImg.src = imageUrl; // Establecer la imagen en el modal
      }
      
      // Función para cerrar el modal
      function closeModal() {
        const modal = document.getElementById("modal");
        modal.style.display = "none"; // Ocultar el modal
      }
      
      // Cargar las imágenes cuando la página esté lista
      window.onload = loadImages;
      
      // Asignar evento de clic al botón de cerrar
      document.getElementById("close-btn").addEventListener("click", closeModal);
      
      // Cerrar el modal si se hace clic fuera de la imagen
      window.addEventListener("click", (event) => {
        const modal = document.getElementById("modal");
        if (event.target === modal) {
          closeModal();
        }
      });