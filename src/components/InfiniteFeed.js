import React, { useState, useEffect, useCallback } from 'react';
import { generateMockPosts } from './utils';
import { LazyPostLoader } from './LazyPostLoader';

export const InfiniteFeed = () => {
    const [posts, setPosts] = useState(generateMockPosts(5));
    const [loading, setLoading] = useState(false);

    const loadMorePosts = useCallback(() => {
        if (loading) return;

        setLoading(true);
        setTimeout(() => {
            const newPosts = generateMockPosts(5);
            setPosts(prev => [...prev, ...newPosts]);
            setLoading(false);
        }, 1000);
    }, [loading]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200) {
                loadMorePosts();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMorePosts]);

    return (
        <div>
            <div style={{
                backgroundColor: '#f0f0f0',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px'
            }}>
                <h2>Как это работает?</h2>
                <p>
                    Это демонстрация бесконечной ленты с ленивой загрузкой (lazy loading) и Suspense.
                </p>
                <div style={{width: 'fit-content', justifySelf: 'center'}}>
                    <ul style={{ listStyle: 'none', justifyItems: 'left', backgroundColor: 'lightyellow', padding: '29px', borderRadius: '4px'}}>
                        <li><strong>React.lazy</strong> - динамически загружает компоненты постов при их появлении</li>
                        <li><strong>Suspense</strong> - показывает fallback-заглушку во время загрузки</li>
                        <li><strong>Intersection Observer (через scroll event)</strong> - определяет, когда пользователь прокрутил до конца</li>
                        <li><strong>Моковые данные</strong> - посты генерируются на лету с задержкой 1с</li>
                    </ul>
                </div>
                <p>Прокрутите вниз, чтобы увидеть ленивую загрузку в действии!</p>
            </div>

            <h1>Бесконечная лента</h1>
            {posts.map((post) => (
                <LazyPostLoader key={post.id} post={post} />
            ))}
            {loading && <div style={{ padding: '20px', textAlign: 'center' }}>Загрузка новых постов...</div>}
        </div>
    );
};