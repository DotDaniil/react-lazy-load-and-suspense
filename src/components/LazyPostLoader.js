import React, { Suspense } from 'react';
import { Post } from './Post';
import  '../styles/LazyPostLoader.css';

// Динамически импортируем компонент с искусственной задержкой
const LazyLoadedPost = React.lazy(() =>
    new Promise(resolve =>
        setTimeout(() => resolve({ default: Post }), 1000) // Имитируем задержку
    )
);

export const LazyPostLoader = ({ post }) => {
    return (
        <Suspense fallback={
            <div className="loadingFallback">
                Загрузка поста...
            </div>
        }>
            <LazyLoadedPost post={post} />
        </Suspense>
    );
};