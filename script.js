// 作品数据
const works = [
    {
        id: 1,
        title: '羚羊风暴',
        author: '徐 瑛、张以恒、宋思澄',
        category: 'fitness',
        categoryName: '健身器材',
        award: '金奖',
        description: '源自羚羊的爆发瞬间，速度与力量在此汇聚，化为席卷一切的风暴。',
        images: [        
            'images/work1_1.jpg',
            'images/work1_2.jpg',
            'images/work1_3.jpg',
            'images/work1_4.jpg',
            'images/work1_5.jpg',
            'images/work1_6.jpg',
            'images/work1_7.jpg'
        ]
    },
    {
        id: 2,
        title: '划离喧嚣',
        author: '田子文、曹宇星、张宇琛',
        category: 'fitness',
        categoryName: '健身器材',
        award: '银奖',
        description: '沉浸式精神航行系统，通过视觉、听觉、触觉与情绪化交互，让运动从身体消耗转变为一次精神远航。',
        images: [
            'images/work2_1.jpg',
            'images/work2_2.jpg',
            'images/work2_3.jpg',
            'images/work2_4.jpg'
        ]
    },
    {
        id: 3,
        title: '自然之境——家用划船机设计',
        author: '赵佳雯',
        category: 'fitness',
        categoryName: '健身器材',
        award: '银奖',
        description: '一件可以运动的长凳 · 一件融于客厅的健康家具。',
        images: [
            'images/work3_1.jpg',
            'images/work3_2.jpg',
            'images/work3_3.jpg',
            'images/work3_4.jpg',
            'images/work3_5.jpg'
        ]
    },
    {
        id: 4,
        title: 'ELITEFLOW精英之流',
        author: '朱桉绮',
        category: 'fitness',
        categoryName: '健身器材',
        award: '铜奖',
        description: '以 “自然流水”与“水上赛艇” 为核心意象“流体美学”“ai数智科技”相结合重新定义高端居家划船机。',
        images: [
            'images/work4_1.jpg',
            'images/work4_2.jpg',
            'images/work4_3.jpg',
            'images/work4_4.jpg'
        ]
    },
    {
        id: 5,
        title: '棱衡·三角力境——人体工学拱形动感单车设计',
        author: '唐佳怡、王 奥',
        category: 'fitness',
        categoryName: '健身器材',
        award: '铜奖',
        description: '融合建筑拱形稳力结构，糅合极简家居美学，贴合轻奢居家健身潮流，打造稳固美观又适配都市家庭的轻运动器械。',
        images: [
            'images/work5_1.jpg',
            'images/work5_2.jpg',
            'images/work5_3.jpg',
            'images/work5_4.jpg',
            'images/work5_5.jpg'
        ]
    },
    {
        id: 6,
        title: '栖叠智健划船器',
        author: '李若涵、程朵岑',
        category: 'fitness',
        categoryName: '健身器材',
        award: '铜奖',
        description: '专为中产庭院打造多功能户外健身器材，兼具划船运动、休闲坐憩与收纳属性，木纹质感融于自然，防水耐候，适配庭院露台场景。',
        images: [
            'images/work6_1.jpg',
            'images/work6_2.jpg',
            'images/work6_3.jpg',
            'images/work6_4.jpg',
            'images/work6_5.jpg'
        ]
    },
    {
        id: 7,
        title: '凝光划境',
        author: '刘 恋、谢依露、郑诗琪',
        category: 'fitness',
        categoryName: '健身器材',
        award: '优秀奖',
        description: '无限循环的莫比乌斯将运动的“往复”升华为一种“无限延展”的视觉语言循环、延续、突破边界。',
        images: [
            'images/work7_1.jpg',
            'images/work7_2.jpg',
            'images/work7_3.jpg',
            'images/work7_4.jpg',
            'images/work7_5.jpg'
        ]
    },
    {
        id: 8,
        title: '智能空气循环净化动感单车',
        author: '李玉玲、唐云阳',
        category: 'fitness',
        categoryName: '健身器材',
        award: '优秀奖',
        description: '智能循环净化动感单车，骑行即净风，车速联动风速，骑行越快风量越足，边运动边净化，沉浸式畅享户外清风骑行感。',
        images: [
            'images/work8_1.jpg',
            'images/work8_2.jpg',
            'images/work8_3.jpg',
            'images/work8_4.jpg',
            'images/work8_5.jpg',
            'images/work8_6.jpg'
        ]
    },
    {
        id: 9,
        title: '悬浮之境•仿生 按摩大师',
        author: '冯意婷、黄月晗',
        category: 'massage',
        categoryName: '按摩椅',
        award: '优秀奖',
        description: '灵感源于自然蝴蝶的优雅蜕变，科技融合艺术，带来身心深度放松的全新体验。',
        images: [
            'images/work9_1.jpg',
            'images/work9_2.jpg',
            'images/work9_3.jpg',
            'images/work9_4.jpg'
        ]
    },
    {
        id: 10,
        title: '风致·轻奢智能跑步机',
        author: '陈肖邑',
        category: 'fitness',
        categoryName: '健身器材',
        award: '优秀奖',
        description: '电机低噪低于 55 分贝，深夜运动无忧；一键磁吸急停，守护居家安全；静音万向轮设计，移动顺滑不伤地面。',
        images: [
            'images/work10_1.jpg',
            'images/work10_2.jpg',
            'images/work10_3.jpg',
            'images/work10_4.jpg'
        ]
    },
    {
        id: 11,
        title: '留影·艺境',
        author: '周子栋',
        category: 'fitness',
        categoryName: '健身器材',
        award: '优秀奖',
        description: '以“流动的雕塑”为灵感，融合自然曲线与极简几何，打造一件兼具健身功能与空间美学的家居艺术品，让运动成为一种优雅的生活仪式。',
        images: [
            'images/work11_1.jpg',
            'images/work11_2.jpg',
            'images/work11_3.jpg',
            'images/work11_4.jpg'
        ]
    },
    {
        id: 12,
        title: 'AETHER｜融于家居的高端家庭智能跑步机',
        author: '丝靺融',
        category: 'fitness',
        categoryName: '健身器材',
        award: '优秀奖',
        description: '将家具设计思维融入跑步机设计，打破传统健身器械的冰冷感，以简约优雅的造型，温润自然的材质和细腻的工艺，让跑步机成为家居的一部分，在运动与生活之间找到平衡。',
        images: [
            'images/work12_1.jpg',
            'images/work12_2.jpg',
            'images/work12_3.jpg',
            'images/work12_4.jpg',
            'images/work12_5.jpg'
        ]
    },
    {
        id: 13,
        title: 'LESS·RIDE动感单车',
        author: '李昊泽',
        category: 'fitness',
        categoryName: '健身器材',
        award: '应用价值奖',
        description: 'LESS・RIDE 极简动感单车，秉持少即是多设计理念，精简结构利落塑形，摆脱器械笨重感，自然融入居家空间，伴你居家静享运动，重拾身心平和。',
        images: [
            'images/work13_1.jpg',
            'images/work13_2.jpg',
            'images/work13_3.jpg',
            'images/work13_4.jpg',
            'images/work13_5.jpg',
            'images/work13_6.jpg',
            'images/work13_7.jpg'
        ]
    },
    {
        id: 14,
        title: 'ECHO RIDE骑遇回响 动感单车',
        author: '赖雅雯、胡馨旖、崔 璨',
        category: 'fitness',
        categoryName: '健身器材',
        award: '应用价值奖',
        description: '运动淬炼身心，设计融汇格调。这款动感单车跳出工具属性，化身居家雅致伙伴，雕塑感 X 型机身搭配温润质感，兼具力量气场与简约美学，让骑行成为身心与居家空间的温柔共鸣。',
        images: [
            'images/work14_1.jpg',
            'images/work14_2.jpg',
            'images/work14_3.jpg',
            'images/work14_4.jpg',
            'images/work14_5.jpg',
            'images/work14_6.jpg'
        ]
    },
    {
        id: 15,
        title: '栖悦按摩椅',
        author: '舒元圆、沈安琪、张亭钰',
        category: 'massage',
        categoryName: '按摩椅',
        award: '应用价值奖',
        description: '以蛋形太空舱为造型灵感，融合东方禅意美学与现代科技，以优雅曲线包裹身心，营造安全私密的治愈空间。栖居之所，身心归处，追求身心合一的至臻体验。',
        images: [
            'images/work15_1.jpg',
            'images/work15_2.jpg',
            'images/work15_3.jpg',
            'images/work15_4.jpg',
            'images/work15_5.jpg',
            'images/work15_6.jpg'
        ]
    }
];

// DOM元素
const grid = document.querySelector('.grid');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.getElementById('closeBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

// 获取奖项对应的样式类名
function getAwardClass(award) {
    switch(award) {
        case '金奖': return 'gold';
        case '银奖': return 'silver';
        case '铜奖': return 'copper';
        case '优秀奖': return 'excellent';
        case '应用价值奖': return 'value';
        default: return 'excellent';
    }
}

// 获取奖项对应的图标
function getAwardIcon(award) {
    switch(award) {
        case '金奖': return '🥇';
        case '银奖': return '🥈';
        case '铜奖': return '🥉';
        case '优秀奖': return '⭐';
        case '应用价值奖': return '💎';
        default: return '🏆';
    }
}

// 渲染作品卡片
function renderWorks(filteredWorks) {
    grid.innerHTML = '';
    filteredWorks.forEach(work => {
        const card = document.createElement('div');
        card.className = 'card';
        const awardClass = getAwardClass(work.award);
        const awardIcon = getAwardIcon(work.award);
        card.innerHTML = `
            <img src="${work.images[0]}" alt="${work.title}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${work.title}</h3>
                <p class="card-author">作者: ${work.author}</p>
                <div class="card-tags">
                    <span class="card-category">${work.categoryName}</span>
                    <span class="card-award ${awardClass}">${awardIcon} ${work.award}</span>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openModal(work));
        grid.appendChild(card);
    });
}

// 打开详情弹窗
function openModal(work) {
    const imagesHtml = work.images.map((img, index) => `
        <img src="${img}" alt="${work.title} 图${index + 1}" class="modal-image-item" ${index === 0 ? 'style="display:block;"' : 'style="display:none;"'}>
    `).join('');

    const awardClass = getAwardClass(work.award);
    const awardIcon = getAwardIcon(work.award);

    modalBody.innerHTML = `
        <div class="modal-image-container">
            <button class="image-prev" onclick="prevImage()">&#10094;</button>
            <div class="modal-image-wrapper">
                ${imagesHtml}
            </div>
            <button class="image-next" onclick="nextImage()">&#10095;</button>
            <div class="image-indicators">
                ${work.images.map((_, index) => `<span class="indicator ${index === 0 ? 'active' : ''}" onclick="goToImage(${index})"></span>`).join('')}
            </div>
            <div class="image-counter">1 / ${work.images.length}</div>
        </div>
        <h2 class="modal-title">${work.title}</h2>
        <div class="modal-info">
            <div class="modal-author"><i>👤</i> ${work.author}</div>
            <div class="modal-category"><i>🏷️</i> ${work.categoryName}</div>
        </div>
        <div class="modal-award ${awardClass}">${awardIcon} ${work.award}</div>
        <p class="modal-description">${work.description}</p>
    `;
    currentImageIndex = 0;
    currentImages = work.images;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 图片轮播变量
let currentImageIndex = 0;
let currentImages = [];

// 上一张图片
function prevImage() {
    if (currentImageIndex > 0) {
        goToImage(currentImageIndex - 1);
    }
}

// 下一张图片
function nextImage() {
    if (currentImageIndex < currentImages.length - 1) {
        goToImage(currentImageIndex + 1);
    }
}

// 跳转到指定图片
function goToImage(index) {
    const images = document.querySelectorAll('.modal-image-item');
    const indicators = document.querySelectorAll('.indicator');
    
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
    
    indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === index);
    });
    
    currentImageIndex = index;
    
    // 更新计数器
    const counter = document.querySelector('.image-counter');
    if (counter) {
        counter.textContent = `${index + 1} / ${currentImages.length}`;
    }
}

// 关闭弹窗
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 筛选功能
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.dataset.category;
        if (category === 'all') {
            renderWorks(works);
        } else {
            const filtered = works.filter(work => work.category === category);
            renderWorks(filtered);
        }
    });
});

// 事件监听
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// 键盘事件
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// 密码保护功能
const PASSWORD = '2026';

function checkPassword() {
    const input = document.getElementById('password-input');
    const errorMsg = document.getElementById('error-message');
    
    if (input.value === PASSWORD) {
        document.getElementById('password-protect').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        renderWorks(works);
    } else {
        errorMsg.style.display = 'block';
        input.value = '';
        input.focus();
    }
}

// 支持回车键验证
document.getElementById('password-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// 图片灯箱功能
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxContent = document.querySelector('.lightbox-content');
let lightboxImages = [];
let lightboxCurrentIndex = 0;

// 触摸滑动相关变量
let touchStartX = 0;
let touchEndX = 0;
const minSwipeDistance = 50;

// 打开灯箱
function openLightbox(index) {
    lightboxImages = currentImages;
    lightboxCurrentIndex = index;
    updateLightbox();
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // 重置并显示滑动提示
    const swipeHint = document.getElementById('swipeHint');
    if (swipeHint) {
        swipeHint.style.animation = 'none';
        swipeHint.offsetHeight; // 触发重排以重新应用动画
        swipeHint.style.animation = 'swipeHintFade 3s ease-in-out';
    }
}

// 更新灯箱内容
function updateLightbox() {
    if (lightboxImages.length > 0) {
        lightboxImage.src = lightboxImages[lightboxCurrentIndex];
        lightboxCounter.textContent = `${lightboxCurrentIndex + 1} / ${lightboxImages.length}`;
    }
}

// 关闭灯箱
function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 灯箱上一张
function lightboxPrev() {
    if (lightboxCurrentIndex > 0) {
        lightboxCurrentIndex--;
        updateLightbox();
    }
}

// 灯箱下一张
function lightboxNext() {
    if (lightboxCurrentIndex < lightboxImages.length - 1) {
        lightboxCurrentIndex++;
        updateLightbox();
    }
}

// 灯箱事件监听
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// 灯箱键盘事件
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'block') {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            lightboxPrev();
        } else if (e.key === 'ArrowRight') {
            lightboxNext();
        }
    }
});

// 灯箱触摸滑动事件
lightboxContent.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

lightboxContent.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    
    // 如果水平滑动距离超过最小阈值
    if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
            // 向右滑动 - 上一张
            lightboxPrev();
        } else {
            // 向左滑动 - 下一张
            lightboxNext();
        }
    }
}

// 为弹窗中的图片添加点击事件
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-image-item')) {
        const images = document.querySelectorAll('.modal-image-item');
        images.forEach((img, index) => {
            if (img === e.target) {
                openLightbox(index);
            }
        });
    }
});
