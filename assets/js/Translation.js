const translations ={
    en: {
        home:'Home',
        front:'Front-End',
        back:'Back-End',
        companies:'companies',
        start:'start',
        end:'end',
        work:'Work',
        dataBase:'Database',
        staff:'staff',
        HR:"HR",
        add:'Add',
        help:'we are here to help you.',
        needHelp:'Need Help',
        beProgrammer:'Do you want to be a programmer?',
        subscribeToHelp:'Subscribe to get help',
        Subscribe:'Subscribe',
        html:'The HyperText Markup Language or HTML . it is use to build page wab',
        css:' "Cascading Style Sheets" and "Pseudo-element" redirect here',
        js:'Not to be confused with Java (programming language)',
        Laraveldetails:'Laravel is a free and open-source PHP web framework created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern and based on Symfony. Some of the features of Laravel are a modular packaging system with a dedicated dependency manager, different ways for accessing relational databases, utilities that aid in application deployment and maintenance, and its orientation toward syntactic sugar',
        nodejs:'Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!',
        django:'Django is a free and open-source, Python-based web framework that follows the model–template–views (MTV) architectural pattern. It is maintained by the Django Software Foundation (DSF), an independent organization established in the US as a non-profit',
        ASPNET:'ASP and ASP.NET are server side technologies. Both technologies enable computer code to be executed by an Internet server. When a browser requests an ASP or ASP.NET file, the ASP engine reads the file, executes any code in the file, and returns the result to the browser',
        laravel:'Laravel Framework',
        channels:'Some of arabic channels for teaching the Laravel framework',
        videoError:'your browser does not support this video tag.',
        btncontinue:'Continue Reading',
        nourHomsi:'Nour Homsi',
        elzero:'Elzero Web School',
        mora:'Mora Soft',
        btnSend:'Send Message Now',
        lang:'Language'
    },
    ar: {
        home:'الصفحة الرئيسية',
        front:'الواجهة الأمامية',
        back:'الواجهة الخلفية',
        companies:'موقع الشركات',
        start:'وقت بدء الدوام',
        end:'وقت انتهاء الدوام',
        work:'اختصاص العمل',
        dataBase:'قاعدة البيانات',
        staff:'موظف',
        HR:'المدير',
        add:'إضافة',
        help:'نحن هنا لمساعدتك',
        needHelp:'تحتاج المساعدة',
        beProgrammer:'هل تريد أن تصبح مبرمج ؟',
        subscribeToHelp:'اشترك كي تحصل على المساعدة',
        Subscribe:'اشترك',
        html:'لغة ترميز النص التشعبي أو HTML . يتم استخدامه لبناء صفحة WAB',
        css:'أوراق الأنماط المتتالية" و "العنصر الزائف" إعادة التوجيه هنا',
        js:'لا ينبغي الخلط بينه وبين Java (لغة برمجة)',
        Laraveldetails:'Laravel هو إطار ويب PHP مجاني ومفتوح المصدر تم إنشاؤه بواسطة Taylor Otwell ويهدف إلى تطوير تطبيقات الويب باتباع النمط المعماري للنموذج والعرض والتحكم (MVC) واستنادا إلى Symfony. بعض ميزات Laravel هي نظام تغليف معياري مع مدير تبعية مخصص ، وطرق مختلفة للوصول إلى قواعد البيانات العلائقية ، والأدوات المساعدة التي تساعد في نشر التطبيق وصيانته ، وتوجهه نحو السكر النحوي',
        nodejs:'Node.js هي بيئة تشغيل جافا سكريبت مفتوحة المصدر وعبر الأنظمة الأساسية. إنها أداة شائعة لأي نوع من المشاريع تقريبا!',
        django:'Django هو إطار عمل ويب مجاني ومفتوح المصدر قائم على Python يتبع النمط المعماري للنموذج والقالب والمشاهدات (MTV). تتم صيانته من قبل مؤسسة Django Software Foundation (DSF) ، وهي منظمة مستقلة تأسست في الولايات المتحدة كمنظمة غير ربحية',
        ASPNET:'ASP و ASP.NET هي تقنيات من جانب الخادم. تتيح كلتا التقنيتين تنفيذ رمز الكمبيوتر بواسطة خادم الإنترنت. عندما يطلب مستعرض ملف ASP أو ASP.NET، يقوم مشغل ASP بقراءة الملف وتنفيذ أي تعليمات برمجية في الملف وإرجاع النتيجة إلى المستعرض',
        laravel:' إطار العمل laravel',
        channels:' بعض القنوات العربية لتعلم إطار العمل laravel',
        videoError:'المتصفح الخاص بك لا يدعم هذا الفيديو',
        btncontinue:'متابعة القراءة',
        nourHomsi:'نور حمصي',
        elzero:'الزيرو',
        mora:'مورا سوفت',
        btnSend:'ارسل الآن',
        lang:'اللغة'

    }
};

const languageSelector=document.getElementById('tran');
languageSelector.addEventListener('change',(event)=>{
    setLanguage(event.target.value);
    localStorage.setItem("lang",event.target.value);
});

document.addEventListener('DOMContentLoaded',()=>{
const language=localStorage.getItem('lang');
setLanguage(language);
console.log(language);
});
const setLanguage=(language)=>{
const elemnts=document.querySelectorAll('[data-tran]');
elemnts.forEach((element)=>{
    const translationKey =element.getAttribute('data-tran');
    element.textContent= translations[language][translationKey];
});
if (language === 'ar'){
    document.dir='rtl';
}
else
{
    document.dir='ltr';
}
};

