module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16, // Базовий розмір (1rem = 16px)
      propList: ['*'], // Конвертувати всі властивості (margin, padding, font-size тощо)
      selectorBlackList: [], // Класи, які треба ігнорувати (наприклад, [/^\.keep-/])
      replace: true,
      mediaQuery: true, // Чи конвертувати px всередині @media
      minPixelValue: 0, // Мінімальне значення для конвертації (наприклад, 1px для border не зачіпати)
    },
  },
};