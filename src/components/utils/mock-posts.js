export const generateMockPosts = (count) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        title: `Пост ${i + 1}`,
        body: `Это текст поста №${i + 1}. Здесь может быть длинное описание.`,
        image: `https://picsum.photos/500/300?random=${i}`, // случайные картинки
    }));
};