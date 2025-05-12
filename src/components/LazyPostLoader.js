import React, { Suspense } from 'react';
import { Post } from './Post';

// Динамически импортируем "тяжелый" компонент
const LazyLoadedPost = React.lazy(() =>
    new Promise(resolve =>
        setTimeout(() => resolve({ default: Post }), 1000) // Имитируем задержку
    )
);

export const LazyPostLoader = ({ post }) => {
    return (
        <Suspense fallback={<div style={{ padding: '20px', background: '#f0f0f0' }}>Загрузка поста...</div>}>
            <LazyLoadedPost post={post} />
        </Suspense>
    );
};