import { jsPDF } from 'jspdf';

// ================= DATOS =================
const DATA = {
    header: {
        name: 'FELIPE LOBO BORIC',
        title: 'CONSTRUCTOR CIVIL UC',
        sub: 'DIGITAL // PROYECTOS // DOCUMENTAL',
        id: 'REF: FLB-2025'
    },
    contact: {
        phone: '+56 9 9871 4263',
        email: 'felipealonso.lobo@gmail.com',
        location: 'Santiago, Chile',
        linkedin: 'felipealonsolobo'
    },
    summary:
        'Constructor Civil UC con más de nueve años de experiencia en edificación e infraestructura. ' +
        'Especialista en integrar la gestión de obra con sistemas digitales para asegurar trazabilidad y calidad de datos. ' +
        'Experiencia en Oficina Técnica, Terreno y Control Documental en proyectos complejos. ' +
        'Desarrollador de automatizaciones (Python, M365) para convertir datos dispersos en reportabilidad accionable.',
    skills: {
        hard: [
            'Gestión de proyectos',
            'Sistemas documentales (EDMS)',
            'Last Planner System',
            'Evaluación Ambiental (SEIA)',
            'Coordinación de especialidades',
            'Control de costos'
        ],
        software: [
            'SharePoint / M365',
            'Python / Automatización',
            'Synchro 4D / MS Project',
            'HTML / CSS / JavaScript',
            'Power Automate / APIs',
            'AutoCAD / QGIS / Presto'
        ]
    },
    experience: [
        {
            company: 'CRAMSA S.A.',
            role: 'CONTROL DOCUMENTAL Y TRANSFORMACIÓN DIGITAL',
            period: '2021 — HOY',
            desc: [
                'Diseño e implementación del sistema de gestión documental del EIA (Proyecto Aguas Marítimas) en SharePoint/M365.',
                'Desarrollo de scripts en Python y soluciones web para generar tableros de seguimiento y alertas automáticas.',
                'Coordinación de especialidades para Adendas y respuestas al SEA, estandarizando procedimientos.'
            ]
        },
        {
            company: 'CONSTRUCTORA CNB LTDA.',
            role: 'JEFE DE OFICINA TÉCNICA',
            period: '2019 — 2021',
            desc: [
                'Oficina técnica del edificio Alonso Square. Gestión de RDI, control de cambios y coordinación técnica.',
                'Implementación de planificación 4D con Synchro, integrando BIM para anticipar interferencias.',
                'Control de costos, estados de pago y valorizaciones con proyecciones de cierre.'
            ]
        },
        {
            company: 'WSP CHILE',
            role: 'INSPECTOR TÉCNICO',
            period: '2019',
            desc: [
                'Gestión documental para el proyecto Giant Magellan Telescope (GMT) bajo estándares internacionales.',
                'Inspección técnica en revisión de avances y registros de calidad en entorno bilingüe.',
                'Mantenimiento de línea base documental para auditorías del proyecto.'
            ]
        },
        {
            company: 'CONSTRUCTORA FGS S.A.',
            role: 'CONTROL DE GESTIÓN Y TERRENO',
            period: '2015 — 2018',
            desc: [
                'Planificación mediante Last Planner System, mejorando el cumplimiento del plan semanal.',
                'Supervisión de terminaciones y obra gruesa, coordinando subcontratos.',
                'Gestión administrativa de contratos desde licitación hasta cierre.'
            ]
        }
    ],
    education: [
        {
            inst: 'PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE',
            title: 'CONSTRUCTOR CIVIL',
            year: '2014',
            detail: 'Dos Votos de Distinción. Mención en Tecnologías del Hormigón.'
        },
        {
            inst: 'UNIVERSIDAD DE LOS ANDES',
            title: 'MARCO LEGAL DESALINIZACIÓN',
            year: '2022',
            detail: 'Normativa hídrica y tramitación de proyectos estratégicos.'
        }
    ],
    references: [
        { name: 'R. GLADE C.', cargo: 'Gerente General, Tractebel', contact: '+56 9 7829 2391' },
        { name: 'A. NAVARRO V.', cargo: 'Gerente Proyectos, WSP', contact: '+56 9 7768 2114' },
        { name: 'R. GUTIÉRREZ J.', cargo: 'Gerente Proyectos, FGS', contact: '+56 9 7191 0419' }
    ]
};

// ================= CONFIGURACIÓN NEO-BRUTALISTA =================
const CFG = {
    page: { w: 215.9, h: 279.4 },
    margin: { top: 10, bot: 10, left: 8, right: 8 },
    sidebar: { width: 62 },
    colors: {
        cream: [255, 253, 245] as [number, number, number],
        ink: [10, 10, 10] as [number, number, number],
        sidebarBg: [15, 15, 15] as [number, number, number],
        textLight: [240, 240, 240] as [number, number, number],
        orange: [255, 77, 0] as [number, number, number],
        blue: [0, 100, 255] as [number, number, number],
        yellow: [255, 213, 0] as [number, number, number],
        grey: [100, 100, 100] as [number, number, number],
        white: [255, 255, 255] as [number, number, number]
    },
    fonts: {
        main: 'helvetica',
        mono: 'courier'
    },
    border: { thick: 1.2, medium: 0.6, thin: 0.3 }
};

export function generateCV() {
    const doc = new jsPDF({ unit: 'mm', format: 'letter' });

    let cursorY = CFG.margin.top;
    const mainX = CFG.sidebar.width + 6;
    const mainW = CFG.page.w - CFG.sidebar.width - CFG.margin.right - 6;

    // ================= ICONOS VECTORIALES (Estilo FontAwesome) =================
    const drawIcon = (type: string, x: number, y: number, size: number, color: [number, number, number]) => {
        doc.setDrawColor(...color);
        doc.setFillColor(...color);
        doc.setLineWidth(0.4);

        const s = size;
        const cx = x + s / 2;
        const cy = y + s / 2;

        if (type === 'location') {
            // Pin de ubicación (fa-map-marker-alt)
            doc.circle(cx, cy - s * 0.15, s * 0.25, 'F');
            doc.triangle(cx - s * 0.2, cy, cx + s * 0.2, cy, cx, cy + s * 0.4, 'F');
        } else if (type === 'phone') {
            // Teléfono (fa-phone)
            doc.setLineWidth(0.5);
            doc.rect(x + s * 0.2, y, s * 0.6, s, 'S');
            doc.setFillColor(...color);
            doc.circle(cx, y + s * 0.85, s * 0.08, 'F');
        } else if (type === 'email') {
            // Sobre (fa-envelope)
            doc.rect(x, y + s * 0.15, s, s * 0.7, 'S');
            doc.line(x, y + s * 0.15, cx, cy + s * 0.1);
            doc.line(x + s, y + s * 0.15, cx, cy + s * 0.1);
        } else if (type === 'linkedin') {
            // LinkedIn (fa-linkedin)
            doc.setFont(CFG.fonts.main, 'bold');
            doc.setFontSize(s * 2.5);
            doc.setTextColor(...color);
            doc.text('in', x, y + s * 0.9);
        } else if (type === 'briefcase') {
            // Maletín (fa-briefcase)
            doc.rect(x, y + s * 0.25, s, s * 0.65, 'S');
            doc.rect(x + s * 0.3, y, s * 0.4, s * 0.3, 'S');
        } else if (type === 'graduation') {
            // Birrete (fa-graduation-cap)
            doc.line(x, cy, cx, y);
            doc.line(cx, y, x + s, cy);
            doc.rect(x + s * 0.2, cy, s * 0.6, s * 0.4, 'F');
        } else if (type === 'users') {
            // Usuarios (fa-users)
            doc.circle(cx - s * 0.25, y + s * 0.25, s * 0.2, 'F');
            doc.circle(cx + s * 0.25, y + s * 0.25, s * 0.2, 'F');
            doc.circle(cx - s * 0.25, y + s * 0.7, s * 0.25, 'F');
            doc.circle(cx + s * 0.25, y + s * 0.7, s * 0.25, 'F');
        } else if (type === 'code') {
            // Código (fa-code)
            doc.setLineWidth(0.5);
            doc.line(x, cy, x + s * 0.3, y);
            doc.line(x, cy, x + s * 0.3, y + s);
            doc.line(x + s, cy, x + s * 0.7, y);
            doc.line(x + s, cy, x + s * 0.7, y + s);
        } else if (type === 'tools') {
            // Herramientas (fa-tools)
            doc.setLineWidth(0.5);
            doc.line(x, y + s, x + s * 0.4, y + s * 0.6);
            doc.line(x + s * 0.6, y + s * 0.4, x + s, y);
            doc.rect(x + s * 0.35, y + s * 0.35, s * 0.3, s * 0.3, 'S');
        }
    };

    // ================= SIDEBAR =================
    const drawSidebar = () => {
        const sbW = CFG.sidebar.width;
        const sbX = 6;
        const sbTextW = sbW - 14;

        // Fondo negro
        doc.setFillColor(...CFG.colors.sidebarBg);
        doc.rect(0, 0, sbW, CFG.page.h, 'F');

        // Borde naranja derecho
        doc.setFillColor(...CFG.colors.orange);
        doc.rect(sbW - 2.5, 0, 2.5, CFG.page.h, 'F');

        // ID técnico vertical
        doc.setTextColor(40, 40, 40);
        doc.setFont(CFG.fonts.mono, 'bold');
        doc.setFontSize(5);
        doc.text(DATA.header.id, 3, CFG.page.h - 6, { angle: 90 });

        let sbY = CFG.margin.top + 6;

        // ===== NOMBRE =====
        doc.setFont(CFG.fonts.main, 'bold');
        doc.setFontSize(22);
        
        const nameParts = DATA.header.name.split(' ');
        nameParts.forEach((part, idx) => {
            if (idx === nameParts.length - 1) {
                doc.setTextColor(...CFG.colors.orange);
            } else {
                doc.setTextColor(...CFG.colors.white);
            }
            doc.text(part, sbX, sbY);
            sbY += 8;
        });

        sbY += 2;

        // Línea amarilla
        doc.setFillColor(...CFG.colors.yellow);
        doc.rect(sbX, sbY, 16, 2.5, 'F');
        sbY += 10;

        // ===== CONTACTO =====
        const contactItems = [
            { icon: 'location', val: DATA.contact.location },
            { icon: 'phone', val: DATA.contact.phone },
            { icon: 'email', val: DATA.contact.email },
            { icon: 'linkedin', val: DATA.contact.linkedin }
        ];

        contactItems.forEach(item => {
            drawIcon(item.icon, sbX, sbY - 1, 3.5, CFG.colors.orange);
            doc.setFont(CFG.fonts.main, 'normal');
            doc.setFontSize(7);
            doc.setTextColor(...CFG.colors.textLight);
            const lines = doc.splitTextToSize(item.val, sbTextW - 6);
            doc.text(lines, sbX + 6, sbY + 2);
            sbY += lines.length * 3.5 + 4;
        });

        sbY += 6;

        // ===== SKILLS =====
        const renderSkillBlock = (title: string, items: string[], icon: string, accentColor: [number, number, number]) => {
            // Header con icono
            drawIcon(icon, sbX, sbY - 1, 3, accentColor);
            doc.setFillColor(...accentColor);
            doc.rect(sbX + 5, sbY - 2, sbTextW - 5, 4.5, 'F');
            doc.setFont(CFG.fonts.mono, 'bold');
            doc.setFontSize(6);
            doc.setTextColor(...CFG.colors.ink);
            doc.text(title, sbX + 7, sbY + 1);
            sbY += 6;

            // Items compactos
            items.forEach(item => {
                doc.setFont(CFG.fonts.main, 'normal');
                doc.setFontSize(6.5);
                doc.setTextColor(210, 210, 210);
                const lines = doc.splitTextToSize(item, sbTextW);
                doc.text(lines, sbX, sbY);
                sbY += lines.length * 3 + 1;
            });
            sbY += 4;
        };

        renderSkillBlock('COMPETENCIAS', DATA.skills.hard, 'tools', CFG.colors.orange);
        renderSkillBlock('TECNOLOGÍAS', DATA.skills.software, 'code', CFG.colors.blue);
    };

    // ================= HELPERS =================
    const checkPageBreak = (needed: number) => {
        if (cursorY + needed > CFG.page.h - CFG.margin.bot - 8) {
            doc.addPage();
            doc.setFillColor(...CFG.colors.cream);
            doc.rect(CFG.sidebar.width, 0, CFG.page.w - CFG.sidebar.width, CFG.page.h, 'F');
            drawSidebar();
            cursorY = CFG.margin.top + 5;
            return true;
        }
        return false;
    };

    const printSectionTitle = (text: string, icon: string, color: [number, number, number]) => {
        checkPageBreak(16);
        
        // Icono
        drawIcon(icon, mainX, cursorY, 4, color);
        
        // Bloque de color
        doc.setFillColor(...color);
        doc.rect(mainX + 6, cursorY, 3, 6, 'F');
        
        // Título
        doc.setFont(CFG.fonts.main, 'bold');
        doc.setFontSize(12);
        doc.setTextColor(...CFG.colors.ink);
        doc.text(text, mainX + 11, cursorY + 4.5);
        
        // Línea
        doc.setDrawColor(...CFG.colors.ink);
        doc.setLineWidth(CFG.border.medium);
        doc.line(mainX, cursorY + 8, CFG.page.w - CFG.margin.right, cursorY + 8);
        
        cursorY += 12;
    };

    // ================= DOCUMENTO =================
    
    // Fondo crema
    doc.setFillColor(...CFG.colors.cream);
    doc.rect(CFG.sidebar.width, 0, CFG.page.w - CFG.sidebar.width, CFG.page.h, 'F');

    drawSidebar();

    // ===== HEADER =====
    // Caja con sombra
    doc.setFillColor(...CFG.colors.ink);
    doc.rect(mainX + 1.5, cursorY + 1.5, mainW, 18, 'F');
    doc.setFillColor(...CFG.colors.cream);
    doc.setDrawColor(...CFG.colors.ink);
    doc.setLineWidth(CFG.border.thick);
    doc.rect(mainX, cursorY, mainW, 18, 'FD');
    
    doc.setFont(CFG.fonts.main, 'bold');
    doc.setFontSize(16);
    doc.setTextColor(...CFG.colors.ink);
    doc.text(DATA.header.title, mainX + 3, cursorY + 7);

    doc.setFont(CFG.fonts.mono, 'bold');
    doc.setFontSize(8);
    doc.setTextColor(...CFG.colors.blue);
    doc.text(DATA.header.sub, mainX + 3, cursorY + 13);

    cursorY += 22;

    // ===== PERFIL =====
    doc.setFillColor(...CFG.colors.blue);
    doc.rect(mainX, cursorY, 2, 20, 'F');
    
    doc.setFont(CFG.fonts.main, 'normal');
    doc.setFontSize(9);
    doc.setTextColor(30, 30, 30);
    const summaryLines = doc.splitTextToSize(DATA.summary, mainW - 6);
    doc.text(summaryLines, mainX + 5, cursorY + 4, { align: 'justify', maxWidth: mainW - 6 });
    cursorY += summaryLines.length * 4 + 8;

    // ===== EXPERIENCIA =====
    printSectionTitle('EXPERIENCIA PROFESIONAL', 'briefcase', CFG.colors.orange);

    DATA.experience.forEach(job => {
        const descHeight = job.desc.reduce((acc, d) => {
            const l = doc.splitTextToSize(d, mainW - 6);
            return acc + l.length * 3.8 + 1;
        }, 0);
        
        checkPageBreak(Math.min(descHeight + 14, 50));

        // Período
        doc.setFont(CFG.fonts.mono, 'bold');
        doc.setFontSize(8);
        doc.setTextColor(...CFG.colors.orange);
        doc.text(job.period, CFG.page.w - CFG.margin.right, cursorY, { align: 'right' });

        // Cargo
        doc.setFont(CFG.fonts.main, 'bold');
        doc.setFontSize(10);
        doc.setTextColor(...CFG.colors.ink);
        const roleLines = doc.splitTextToSize(job.role, mainW - 35);
        doc.text(roleLines, mainX, cursorY);
        cursorY += roleLines.length * 4.5;

        // Empresa
        doc.setFillColor(...CFG.colors.yellow);
        doc.rect(mainX, cursorY - 2.5, 1.5, 3, 'F');
        doc.setFont(CFG.fonts.main, 'bold');
        doc.setFontSize(9);
        doc.setTextColor(...CFG.colors.grey);
        doc.text(job.company, mainX + 4, cursorY);
        cursorY += 5;

        // Descripción
        job.desc.forEach(d => {
            doc.setFont(CFG.fonts.main, 'normal');
            doc.setFontSize(8.5);
            doc.setTextColor(30, 30, 30);

            // Bullet
            doc.setFillColor(...CFG.colors.ink);
            doc.rect(mainX, cursorY - 2, 1.2, 1.2, 'F');

            const lines = doc.splitTextToSize(d, mainW - 6);
            checkPageBreak(lines.length * 3.8);
            doc.text(lines, mainX + 4, cursorY, { align: 'justify', maxWidth: mainW - 6 });
            cursorY += lines.length * 3.8 + 1;
        });

        cursorY += 5;
    });

    // ===== FORMACIÓN =====
    checkPageBreak(35);
    printSectionTitle('FORMACIÓN ACADÉMICA', 'graduation', CFG.colors.blue);

    DATA.education.forEach(edu => {
        checkPageBreak(18);

        doc.setFont(CFG.fonts.mono, 'bold');
        doc.setFontSize(9);
        doc.setTextColor(...CFG.colors.blue);
        doc.text(edu.year, CFG.page.w - CFG.margin.right, cursorY, { align: 'right' });

        doc.setFont(CFG.fonts.main, 'bold');
        doc.setFontSize(9);
        doc.setTextColor(...CFG.colors.ink);
        const instLines = doc.splitTextToSize(edu.inst, mainW - 25);
        doc.text(instLines, mainX, cursorY);
        cursorY += instLines.length * 4;

        doc.setFont(CFG.fonts.main, 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(40, 40, 40);
        doc.text(edu.title, mainX, cursorY);
        cursorY += 4;

        doc.setFontSize(8);
        doc.setTextColor(...CFG.colors.grey);
        const detailLines = doc.splitTextToSize(edu.detail, mainW);
        doc.text(detailLines, mainX, cursorY);
        cursorY += detailLines.length * 3.5 + 5;
    });

    // ===== REFERENCIAS =====
    checkPageBreak(32);
    printSectionTitle('REFERENCIAS', 'users', CFG.colors.yellow);

    const refGap = 3;
    const refColW = (mainW - refGap * 2) / 3;

    DATA.references.forEach((ref, i) => {
        const xPos = mainX + i * (refColW + refGap);
        let localY = cursorY;

        // Caja con sombra
        doc.setFillColor(...CFG.colors.ink);
        doc.rect(xPos + 1, localY + 1, refColW, 18, 'F');
        doc.setFillColor(...CFG.colors.cream);
        doc.setDrawColor(...CFG.colors.ink);
        doc.setLineWidth(CFG.border.medium);
        doc.rect(xPos, localY, refColW, 18, 'FD');

        // Nombre
        doc.setFont(CFG.fonts.main, 'bold');
        doc.setFontSize(7.5);
        doc.setTextColor(...CFG.colors.ink);
        doc.text(ref.name, xPos + 2, localY + 4);

        // Cargo
        doc.setFont(CFG.fonts.main, 'normal');
        doc.setFontSize(6.5);
        doc.setTextColor(...CFG.colors.grey);
        const cargoLines = doc.splitTextToSize(ref.cargo, refColW - 4);
        doc.text(cargoLines, xPos + 2, localY + 8);

        // Contacto
        doc.setFont(CFG.fonts.mono, 'bold');
        doc.setFontSize(6);
        doc.setTextColor(...CFG.colors.orange);
        doc.text(ref.contact, xPos + 2, localY + 15);
    });

    cursorY += 22;

    // ===== FOOTER =====
    const footerY = CFG.page.h - 6;
    doc.setFillColor(...CFG.colors.ink);
    doc.rect(CFG.sidebar.width, footerY, CFG.page.w - CFG.sidebar.width, 6, 'F');
    
    doc.setFont(CFG.fonts.mono, 'normal');
    doc.setFontSize(5.5);
    doc.setTextColor(...CFG.colors.textLight);
    doc.text(`${DATA.header.id} | ${DATA.contact.email}`, CFG.sidebar.width + 3, footerY + 4);
    doc.text('1/1', CFG.page.w - CFG.margin.right - 2, footerY + 4, { align: 'right' });

    doc.save('CV_Felipe_Lobo_2025.pdf');
}
