import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const posts = [
        {
            title: 'La Evolución del Desarrollo Web',
            date: '2024-08-29',
            content: 'Desde los días del HTML estático hasta la era de los frameworks modernos como React y Vue.js, el desarrollo web ha recorrido un largo camino. Este post explora los hitos importantes en esta evolución y cómo han transformado el mundo de la programación web.',
            fullContent: 'En esta entrada de blog, exploraremos cómo el desarrollo web ha cambiado desde sus inicios. Desde los primeros días del HTML estático hasta la aparición de los modernos frameworks JavaScript como React, Vue.js y Angular, el desarrollo web ha evolucionado de manera significativa. Hablaremos sobre los hitos más importantes en esta evolución, incluyendo la introducción de CSS, el desarrollo de JavaScript, y cómo las nuevas tecnologías han impactado la forma en que construimos y utilizamos aplicaciones web.'
        },
        {
            title: 'Comparativa entre Frameworks de JavaScript',
            date: '2024-09-01',
            content: 'En este post, comparamos React, Vue.js y Angular, tres de los frameworks más populares. Analizamos sus ventajas, desventajas y casos de uso ideales para ayudarte a elegir el mejor para tu proyecto.',
            fullContent: 'En esta publicación, profundizaremos en una comparativa entre los principales frameworks de JavaScript: React, Vue.js y Angular. Cada uno de estos frameworks tiene sus propias ventajas y desventajas, y es crucial entenderlas para elegir el que mejor se adapte a tu proyecto. React es conocido por su flexibilidad y gran ecosistema, Vue.js destaca por su simplicidad y facilidad de integración, y Angular es famoso por su robustez y su enfoque completo de desarrollo.'
        },
        {
            title: 'Cómo Implementar Autenticación con OAuth 2.0 en Aplicaciones Web',
            date: '2024-09-15',
            content: 'La autenticación y autorización son cruciales en el desarrollo de aplicaciones modernas. En esta publicación, exploramos cómo implementar OAuth 2.0 para permitir a los usuarios iniciar sesión con sus cuentas de Google, Facebook u otros proveedores de identidad.',
            fullContent: 'La autenticación y autorización son cruciales en el desarrollo de aplicaciones modernas. En esta publicación, exploramos cómo implementar OAuth 2.0 para permitir a los usuarios iniciar sesión con sus cuentas de Google, Facebook u otros proveedores de identidad. Cubrimos conceptos clave, la configuración de un servidor de autorización y la integración con aplicaciones web usando bibliotecas y herramientas populares. Incluimos ejemplos prácticos y consejos para asegurar la integración de manera efectiva.'
          },
          {
            title: 'Introducción a JAMstack: Moderniza tu Desarrollo Web',
            date: '2024-09-20',
            content: 'JAMstack es una arquitectura moderna que ha ganado popularidad por su rendimiento y escalabilidad. Este post introduce el concepto de JAMstack y cómo puedes utilizarlo para construir aplicaciones web rápidas y seguras.',
            fullContent: 'JAMstack es una arquitectura moderna que ha ganado popularidad por su rendimiento y escalabilidad. Este post introduce el concepto de JAMstack, su arquitectura (JavaScript, APIs y Markup), y cómo puedes utilizarlo para construir aplicaciones web rápidas y seguras. También discutimos las herramientas y servicios que facilitan la implementación de JAMstack. Aprenderás sobre frameworks como Next.js y Gatsby, servicios de despliegue como Netlify, y cómo esta arquitectura puede transformar la manera en que desarrollas y despliegas tus aplicaciones web.'
          },
          {
            title: 'Las Mejores Prácticas para Optimización de Rendimiento en React',
            date: '2024-09-25',
            content: 'Optimizar el rendimiento es crucial para proporcionar una experiencia fluida en aplicaciones React. En este post, cubrimos las mejores prácticas para mejorar el rendimiento en React.',
            fullContent: 'Optimizar el rendimiento es crucial para proporcionar una experiencia fluida en aplicaciones React. En este post, cubrimos las mejores prácticas para mejorar el rendimiento en React, incluyendo técnicas como la memoización, la carga diferida (lazy loading), y la optimización del renderizado. También discutimos herramientas y estrategias para medir y mejorar el rendimiento de tus aplicaciones React, así como ejemplos prácticos para implementar estas técnicas de manera efectiva.'
          },
          {
            title: 'Diseño Web Inclusivo: Cómo Hacer tu Sitio Accesible para Todos',
            date: '2024-09-30',
            content: 'La accesibilidad web asegura que las personas con discapacidades puedan usar tu sitio web de manera efectiva. Este artículo ofrece una guía sobre cómo implementar prácticas de diseño inclusivo y accesibilidad.',
            fullContent: 'La accesibilidad web asegura que las personas con discapacidades puedan usar tu sitio web de manera efectiva. Este artículo ofrece una guía sobre cómo implementar prácticas de diseño inclusivo y accesibilidad, cubriendo desde la semántica del HTML hasta el uso de herramientas y técnicas para mejorar la accesibilidad. Abordamos principios como el diseño perceptible, operable, entendible y robusto, y proporcionamos consejos prácticos para aplicar etiquetas ARIA, mejorar el contraste de colores, y asegurar que tu sitio sea navegable por teclado. También incluimos recursos para testear y mejorar la accesibilidad de tu sitio.'
          }
        // Agrega más posts según sea necesario
    ];

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
    };

    return (
        <div className="blog">
            <h2>Blog</h2>
            {posts.map((post, index) => (
                <div
                    key={index}
                    className="post"
                    onClick={() => handlePostClick(post)}
                >
                    <h3>{post.title}</h3>
                    <p className="date">{post.date}</p>
                    <p>{post.content}</p>
                </div>
            ))}
            {selectedPost && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>{selectedPost.title}</h3>
                        <p className="date">{selectedPost.date}</p>
                        <p>{selectedPost.fullContent}</p>
                        <button className="close-modal" onClick={handleCloseModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blog;
