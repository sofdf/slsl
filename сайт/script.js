const projectDetailsButtons = document.querySelectorAll('.project-details');

projectDetailsButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const projectDetailsContent = button.parentElement.querySelector('.project-details-content');
    projectDetailsContent.style.display = projectDetailsContent.style.display === 'none' ? 'block' : 'none';
  });
});
const themeSelector = document.getElementById('theme');

themeSelector.addEventListener('change', (event) => {
  const selectedTheme = event.target.value;
  document.body.className = selectedTheme; // Устанавливаем класс на body
});
const buttons = document.querySelectorAll('.image-button');
const displayedImage = document.getElementById('displayed-image');

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.image-button');
  const displayedImage = document.getElementById('displayed-image');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      const imagePath = button.getAttribute('data-image');
      displayedImage.src = imagePath;
      displayedImage.style.display = 'block'; // Показываем изображение
    });

    button.addEventListener('mouseleave', () => {
      displayedImage.style.display = 'none'; // Скрываем изображение
    });
  });
});
let currentProjectIndex = 0;
const projects = document.querySelectorAll('.project');

function updateProjectDisplay() {
  projects.forEach((project, index) => {
    if (index >= currentProjectIndex && index < currentProjectIndex + 3) {
      project.style.display = 'block'; // Показываем проекты 1, 2 и 3
    } else {
      project.style.display = 'none'; // Скрываем остальные проекты
    }
  });
}

document.getElementById('prev-project').addEventListener('click', () => {
  currentProjectIndex = (currentProjectIndex > 0) ? currentProjectIndex - 1 : Math.max(0, projects.length - 3);
  updateProjectDisplay();
});

document.getElementById('next-project').addEventListener('click', () => {
  currentProjectIndex = (currentProjectIndex < projects.length - 3) ? currentProjectIndex + 1 : 0;
  updateProjectDisplay();
});

// Инициализация отображения проектов
updateProjectDisplay();

function navigateTo(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      // Плавная прокрутка к секции
      section.scrollIntoView({ behavior: 'smooth' });
      
      // Изменение URL без перезагрузки страницы
      history.pushState(null, null, `#${sectionId}`);
  }
}

// Обработчик для навигационных ссылок
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault(); // Отменяем стандартное поведение ссылки
      const targetId = this.getAttribute('href').substring(1); // Получаем ID секции
      navigateTo(targetId); // Переход к секции
  });
});

//

document.getElementById('changeContent').addEventListener('click', () => {
  // Создаем элемент изображения
const img = document.createElement('img');
img.src = 'tg.jpg'; 
img.style.maxWidth = '70%'; // Устанавливаем максимальную ширину изображения
img.style.maxHeight = '70%'; // Устанавливаем максимальную высоту изображения
img.style.height = 'auto'; // Автоматическая высота
img.id = 'popupImage'; // Уникальный идентификатор для изображения

// Добавляем стили для оформления изображения
img.style.borderRadius = '15px'; // Закругленные углы
img.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.5)'; // Тень для изображения
img.style.transition = 'transform 0.3s ease'; // Плавный переход при наведении

// Добавляем эффект увеличения при наведении
img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.05)'; // Увеличение изображения
});
img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)'; // Возврат к исходному размеру
});

// Создаем контейнер для изображения
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Полупрозрачный фон
overlay.style.display = 'flex';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.appendChild(img);


  // Добавляем обработчик события для закрытия изображения
  overlay.addEventListener('click', () => {
      document.body.removeChild(overlay); // Удаляем контейнер с изображением
  });

  // Добавляем контейнер с изображением в тело документа
  document.body.appendChild(overlay);
  
  // Убираем скрытие текста, чтобы кнопка оставалась видимой
  // document.getElementById('initialText').style.display = 'none'; // Удалите или закомментируйте эту строку
});



document.addEventListener('DOMContentLoaded', () => {
  // Функция для установки темы
  function setTheme(theme) {
      document.body.className = theme; // Устанавливаем класс темы
      localStorage.setItem('theme', theme); // Сохраняем тему в localStorage
  }

  // Проверяем, есть ли сохраненная тема в localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      setTheme(savedTheme); // Устанавливаем сохраненную тему
      document.getElementById('theme').value = savedTheme; // Устанавливаем значение селектора
  }

  // Обработчик изменения темы через селектор
  document.getElementById('theme').addEventListener('change', (event) => {
      setTheme(event.target.value); // Устанавливаем тему на основе выбранного значения
  });
});


let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    if (index >= slides.children.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.children.length - 1;
    slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('animatedImage');

  // Добавляем обработчик события для наведения курсора
  image.addEventListener('mouseenter', () => {
      image.classList.add('hover'); // Добавляем класс для анимации
  });

  // Убираем класс при уходе курсора
  image.addEventListener('mouseleave', () => {
      image.classList.remove('hover'); // Удаляем класс для анимации
  });
});

