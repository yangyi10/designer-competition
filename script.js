// 作品数据
const works = [
    {
        id: 1,
        title: '智能跑步机 Pro',
        author: '张明',
        category: 'fitness',
        categoryName: '健身器材',
        description: '采用AI智能调速技术的高端跑步机，支持多种运动模式，实时监测心率与卡路里消耗。',
        details: {
            '设计理念': '科技赋能健康生活',
            '技术亮点': 'AI自适应调速',
            '材料选用': '航空级铝合金',
            '智能功能': '语音控制+APP联动'
        },
        image: 'images/work1.jpg'  // 将你的图片放到 images 文件夹中并重命名为 work1.jpg
    },
    {
        id: 2,
        title: '全身按摩椅 Elite',
        author: '李华',
        category: 'massage',
        categoryName: '按摩椅',
        description: '融合中医经络理论的智能按摩椅，支持多种按摩手法，打造沉浸式放松体验。',
        details: {
            '设计理念': '养生保健新体验',
            '按摩手法': '揉捏/推拿/敲击',
            '材料选用': '环保皮革+记忆棉',
            '创新点': 'AI穴位精准定位'
        },
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20massage%20chair%20modern%20design%20comfortable%20leather%20relaxation%20technology&image_size=landscape_16_9'
    },
    {
        id: 3,
        title: '动感单车 Master',
        author: '王芳',
        category: 'fitness',
        categoryName: '健身器材',
        description: '专业级动感单车，配备智能阻力调节系统，支持实景骑行模式。',
        details: {
            '设计理念': '室内骑行新境界',
            '核心功能': '智能变阻系统',
            '数据监测': '踏频/功率/心率',
            '互动体验': '实景骑行+在线竞赛'
        },
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20spin%20bike%20fitness%20equipment%20modern%20design%20workout%20studio&image_size=landscape_16_9'
    },
    {
        id: 4,
        title: '零重力按摩椅',
        author: '赵强',
        category: 'massage',
        categoryName: '按摩椅',
        description: '模拟太空零重力状态的按摩椅，有效减轻身体压力，促进血液循环。',
        details: {
            '设计理念': '太空科技融入养生',
            '零重力角度': '127°黄金角度',
            '按摩模式': '深度放松/活力恢复',
            '附加功能': '加热理疗+蓝牙音响'
        },
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zero%20gravity%20massage%20chair%20futuristic%20design%20comfortable%20relaxation&image_size=landscape_16_9'
    },
    {
        id: 5,
        title: '智能哑铃套装',
        author: '孙丽',
        category: 'fitness',
        categoryName: '健身器材',
        description: '可调节重量的智能哑铃，一键切换重量，配合APP记录训练数据。',
        details: {
            '设计理念': '智能力量训练',
            '重量范围': '2-24kg可调',
            '智能功能': '重量记忆+训练指导',
            '安全设计': '防滑握把+自动锁定'
        },
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=smart%20adjustable%20dumbbells%20fitness%20equipment%20modern%20minimalist%20design&image_size=landscape_16_9'
    },
    {
        id: 6,
        title: '多功能按摩沙发',
        author: '周伟',
        category: 'massage',
        categoryName: '按摩椅',
        description: '集按摩与休闲于一体的多功能沙发，适合家庭使用，节省空间。',
        details: {
            '设计理念': '家居与健康融合',
            '按摩部位': '颈部/背部/腿部',
            '外观设计': '时尚家居风格',
            '空间优化': '可折叠节省空间'
        },
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=multifunctional%20massage%20sofa%20modern%20living%20room%20furniture%20comfortable&image_size=landscape_16_9'
    },
    {
        id: 7,
        title: '智能椭圆机',
        author: '吴敏',
        category: 'fitness',
        categoryName: '健身器材',
        description: '低冲击有氧运动设备，保护关节同时高效燃脂，适合各年龄段用户。',
        details: {
            '设计理念': '科学运动不伤身',
            '运动轨迹': '椭圆轨迹低冲击',
            '阻力系统': '电磁控阻技术',
            '数据反馈': '实时运动分析'
        },
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=elliptical%20trainer%20fitness%20machine%20modern%20design%20gym%20equipment&image_size=landscape_16_9'
    },
    {
        id: 8,
        title: '颈椎按摩仪',
        author: '郑浩',
        category: 'massage',
        categoryName: '按摩椅',
        description: '针对办公室人群设计的颈椎按摩仪，缓解颈部疲劳，预防颈椎问题。',
        details: {
            '设计理念': '关爱颈椎健康',
            '按摩方式': '脉冲+热敷',
            '智能检测': '自动识别穴位',
            '佩戴舒适': '360°环绕设计'
        },
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=neck%20massager%20device%20modern%20design%20health%20care%20technology&image_size=landscape_16_9'
    },
    {
        id: 9,
        title: '智能划船机',
        author: '黄鹏',
        category: 'fitness',
        categoryName: '健身器材',
        description: '模拟真实划船体验的智能划船机，全身运动高效燃脂。',
        details: {
            '设计理念': '全身运动专家',
            '阻力系统': '水阻/风阻可选',
            '运动效果': '全身85%肌肉参与',
            '互动功能': '实景河道体验'
        },
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=smart%20rowing%20machine%20fitness%20equipment%20modern%20design%20workout&image_size=landscape_16_9'
    },
    {
        id: 10,
        title: '足部按摩器',
        author: '林静',
        category: 'massage',
        categoryName: '按摩椅',
        description: '专业足部按摩器，多档位调节，促进血液循环，缓解疲劳。',
        details: {
            '设计理念': '呵护双脚健康',
            '按摩技术': '滚轮+气压+热敷',
            '穴位覆盖': '足底反射区全覆盖',
            '便捷设计': '可拆卸清洗'
        },
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=foot%20massager%20device%20modern%20design%20health%20care%20comfort&image_size=landscape_16_9'
    },
    {
        id: 11,
        title: '综合训练器',
        author: '何欣',
        category: 'fitness',
        categoryName: '健身器材',
        description: '多功能综合训练器，一台设备满足全身训练需求，适合家庭使用。',
        details: {
            '设计理念': '一站式健身解决方案',
            '训练功能': '力量/拉伸/核心',
            '结构设计': '紧凑型不占空间',
            '安全保障': '多重安全锁'
        },
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=multi%20function%20home%20gym%20equipment%20modern%20design%20fitness&image_size=landscape_16_9'
    },
    {
        id: 12,
        title: '腰部按摩器',
        author: '马超',
        category: 'massage',
        categoryName: '按摩椅',
        description: '针对腰部设计的按摩器，缓解久坐带来的腰部疲劳和酸痛。',
        details: {
            '设计理念': '关爱腰椎健康',
            '按摩方式': '揉捏+热敷+牵引',
            '贴合设计': '人体工学曲线',
            '便携易用': '可穿戴设计'
        },
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=back%20waist%20massager%20belt%20device%20modern%20design%20health%20care&image_size=landscape_16_9'
    },
    {
        id: 13,
        title: '瑜伽垫 Pro',
        author: '罗婷',
        category: 'fitness',
        categoryName: '健身器材',
        description: '专业瑜伽垫，采用环保材料，防滑耐用，支持智能引导功能。',
        details: {
            '设计理念': '专业瑜伽体验',
            '材料环保': 'TPE环保材质',
            '防滑性能': '双面防滑纹理',
            '智能功能': 'LED体式引导'
        },
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yoga%20mat%20professional%20fitness%20equipment%20modern%20design%20purple%20green&image_size=landscape_16_9'
    },
    {
        id: 14,
        title: '眼部按摩仪',
        author: '梁杰',
        category: 'massage',
        categoryName: '按摩椅',
        description: '缓解眼部疲劳的智能按摩仪，采用气囊按压和热敷技术。',
        details: {
            '设计理念': '呵护心灵之窗',
            '按摩技术': '气囊按压+热敷',
            '附加功能': '蓝牙音乐放松',
            '轻便设计': '折叠便携'
        },
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=eye%20massager%20device%20modern%20design%20health%20care%20technology&image_size=landscape_16_9'
    },
    {
        id: 15,
        title: '智能踏步机',
        author: '谢飞',
        category: 'fitness',
        categoryName: '健身器材',
        description: '迷你智能踏步机，小巧便携，适合居家办公间隙锻炼。',
        details: {
            '设计理念': '随时随地动起来',
            '结构设计': '迷你紧凑不占空间',
            '运动强度': '多档位可调',
            '数据记录': 'APP同步运动数据'
        },
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mini%20stepper%20exercise%20machine%20fitness%20equipment%20modern%20design&image_size=landscape_16_9'
    }
];

// DOM元素
const grid = document.querySelector('.grid');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.getElementById('closeBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

// 渲染作品卡片
function renderWorks(filteredWorks) {
    grid.innerHTML = '';
    filteredWorks.forEach(work => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${work.image}" alt="${work.title}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${work.title}</h3>
                <p class="card-author">作者: ${work.author}</p>
                <span class="card-category">${work.categoryName}</span>
            </div>
        `;
        card.addEventListener('click', () => openModal(work));
        grid.appendChild(card);
    });
}

// 打开详情弹窗
function openModal(work) {
    const detailsList = Object.entries(work.details).map(([key, value]) => 
        `<li><span>${key}:</span>${value}</li>`
    ).join('');

    modalBody.innerHTML = `
        <img src="${work.image}" alt="${work.title}" class="modal-image">
        <h2 class="modal-title">${work.title}</h2>
        <div class="modal-info">
            <div class="modal-author"><i>👤</i> ${work.author}</div>
            <div class="modal-category"><i>🏷️</i> ${work.categoryName}</div>
        </div>
        <p class="modal-description">${work.description}</p>
        <div class="modal-details">
            <h3>详细信息</h3>
            <ul>${detailsList}</ul>
        </div>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
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
const PASSWORD = 'Johnson2026design.com';

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