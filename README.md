# 📱 Expo Tech Stack Demo

Демонстрационный проект для изучения современного стека мобильной разработки с использованием Expo, TypeScript, MobX, GraphQL и Firebase.

## 🚀 Технологический стек

- **Framework**: [Expo](https://expo.dev/) - платформа для разработки React Native приложений
- **Language**: [TypeScript](https://www.typescriptlang.org/) - типизированный JavaScript
- **State Management**: 
  - [MobX](https://mobx.js.org/) - реактивное управление состоянием
  - [Context API](https://reactjs.org/docs/context.html) - встроенное управление состоянием React
- **API Integration**:
  - [Axios](https://axios-http.com/) - HTTP клиент для REST API
  - [Apollo Client](https://www.apollographql.com/docs/react/) - GraphQL клиент
- **Backend Services**: [Firebase](https://firebase.google.com/) - аутентификация, база данных, хранилище
- **Package Manager**: [Bun](https://bun.sh/) - быстрый JavaScript runtime и package manager

## 📋 Возможности проекта

- ✅ Аутентификация пользователей через Firebase Auth
- ✅ CRUD операции с постами через REST API
- ✅ GraphQL запросы для получения данных GitHub репозиториев
- ✅ Сравнение подходов управления состоянием (MobX vs Context API)
- ✅ Типизация с TypeScript
- ✅ Современная архитектура приложения

## 🛠 Установка и запуск

### Предварительные требования

- [Node.js](https://nodejs.org/) (версия 18+)
- [Bun](https://bun.sh/) - установите глобально
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Мобильное устройство с приложением Expo Go или эмулятор

### Установка

1. **Клонирование репозитория**
   ```bash
   git clone <your-repo-url>
   cd expo-tech-stack-demo
   ```

2. **Установка зависимостей**
   ```bash
   bun install
   ```

3. **Настройка Firebase**
   
   Создайте проект в [Firebase Console](https://console.firebase.google.com/) и обновите конфигурацию:
   
   ```typescript
   // src/services/firebase/config.ts
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-auth-domain",
     projectId: "your-project-id",
     storageBucket: "your-storage-bucket",
     messagingSenderId: "your-messaging-sender-id",
     appId: "your-app-id"
   };
   ```

4. **Настройка GraphQL (опционально)**
   
   Для работы с GitHub API создайте Personal Access Token:
   ```typescript
   // src/services/graphql/apolloClient.ts
   const httpLink = createHttpLink({
     uri: 'https://api.github.com/graphql',
     headers: {
       authorization: `Bearer YOUR_GITHUB_TOKEN`,
     },
   });
   ```

### Запуск проекта

```bash
# Запуск в режиме разработки
bun start

# Запуск на iOS симуляторе
bun run ios

# Запуск на Android эмуляторе
bun run android

# Запуск в веб-браузере
bun run web
```

## 📁 Структура проекта

```
src/
├── components/          # Переиспользуемые компоненты
│   ├── common/         # Общие UI компоненты
│   └── navigation/     # Навигационные компоненты
├── screens/            # Экраны приложения
│   ├── auth/          # Экраны аутентификации
│   ├── posts/         # Экраны постов
│   └── profile/       # Экраны профиля
├── stores/             # MobX stores
│   ├── RootStore.ts   # Корневой store
│   ├── UserStore.ts   # Store пользователей
│   └── PostStore.ts   # Store постов
├── contexts/           # React Context providers
│   └── AppContext.tsx # Главный контекст приложения
├── services/           # Сервисы для работы с API
│   ├── api/           # REST API сервисы
│   ├── firebase/      # Firebase сервисы
│   └── graphql/       # GraphQL клиент и запросы
├── types/              # TypeScript типы
│   └── index.ts       # Общие типы
└── utils/              # Утилиты и хелперы
    └── helpers.ts     # Вспомогательные функции
```

## 🔧 Доступные скрипты

```bash
# Разработка
bun start              # Запуск Expo dev server
bun run ios           # Запуск на iOS
bun run android       # Запуск на Android
bun run web           # Запуск в браузере

# Проверка кода
bun run lint          # ESLint проверка
bun run type-check    # TypeScript проверка типов
bun run test          # Запуск тестов

# Сборка
bun run build         # Сборка для продакшена
```

## 📚 Изучаемые концепции

### 1. MobX vs Context API

**MobX** - для сложного состояния с автоматической реактивностью:
```typescript
// Автоматическое обновление компонентов при изменении observable данных
const { posts, loading } = useStore().postStore;
```

**Context API** - для простого состояния и пропсов:
```typescript
// Ручное управление состоянием через reducer
const { state, dispatch } = useAppContext();
```

### 2. REST API vs GraphQL

**REST API** (с Axios):
```typescript
// Получение всех постов
const posts = await restApi.getPosts();
```

**GraphQL** (с Apollo Client):
```typescript
// Получение только нужных полей
const { data } = useQuery(GET_REPOSITORIES, {
  variables: { query: 'react', first: 10 }
});
```

### 3. Firebase Integration

- **Authentication**: Email/Password, социальные сети
- **Firestore**: NoSQL база данных в реальном времени
- **Storage**: Загрузка и хранение файлов

## 🎯 Цели обучения

- [x] Настройка современного React Native проекта с TypeScript
- [x] Сравнение различных подходов к управлению состоянием
- [x] Интеграция REST API и GraphQL в одном приложении
- [x] Работа с Firebase сервисами
- [x] Применение лучших практик архитектуры мобильных приложений

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект создан в образовательных целях и распространяется под лицензией MIT.

## 🔗 Полезные ссылки

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [MobX Documentation](https://mobx.js.org/README.html)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📞 Контакты

Если у вас есть вопросы или предложения, создайте issue в репозитории.

