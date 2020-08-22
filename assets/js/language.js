        var profession = {
            en: "Web Developer - Database Analyst",
            es: "Desarrollador Web - Analista de BD"
        };
        var careerSumary = {
            en: "Career Summary",
            es: "Perfil Profesional"
        };        
        var careerSumaryDetail = {
            en: "Computer Engineer with experience in development and maintenance of web systems, management, project management, database analysis. Latest positions: Senior Web Application Developer at Dennari, Director of Processing and Data Analysis at \n\
                Oficina Nacional de Registro Electoral (ONRE) an office of Consejo Nacional Electoral (CNE). \n\
                Technical Leader ONRE-CNE. <strong>Availability to work freelance.</strong>",
            es: "Ingeniero en Informática con experiencia en desarrollo y mantenimiento de sistemas web, dirección, gestión de proyectos, análisis de bases de datos. Últimos cargos: Desarrollador Senior de Aplicaciones Web en Dennari, Director de Procesamiento y Análsis de Datos de la Oficina Nacional de Registro Electoral (ONRE)\n\
                del Consejo Nacional Electoral (CNE). Líder Técnico ONRE-CNE. <strong>Disponibilidad para trabajar freelance.</strong>"
        }
        
        var workExperience = {
            en: "Work Experience",
            es: "Experiencia Laboral"
        }
        
        var presentDate = {
            en: "2017 - Present",
            es: "2017 - Presente"
        }
        
        var workExperience1Title = {
            en: "Director",
            es: "Director"
        }

        var workExperience2Title = {
            en: "Senior Web Application Developer",
            es: "Desarrollador de Aplicaciones Web Senior"
        }

        var workExperience3Title = {
            en: "Database Analyst / Web Developer",
            es: "Analista BD / Desarrollador Web"
        }
        
        var workExperience4Title = {
            en: "Web Developer Junior",
            es: "Desarrollador Web Junior"
        }
        
        /*var workExperience4Title = {
            en: "Application Developer Lotus Notes",
            es: "Desarrollador de Aplicaciones Lotus Notes"
        }*/
        
        var workExperience1Detail = {
            en: "<p>In charge of the information systems area. Work team management and web information system development.</p>",
            es: "<p>Encargado del área de sistemas de información. Manejo de equipos de trabajo en el área de diseño y \n\
                desarrollo de sistemas de información web.</p>"
        }

        var workExperience2Detail = {
            en: "<p>Web developer analyst. Analysis, design, development and maintenance of web systems.</p>",
            es: "<p>Analista programador web. Análisis, diseño, desarrollo y mantenimiento de sistemas web.</p>"
        }
                
        var workExperience3Detail ={
            en: "<p>Database analyst with project leader functions. Management of work teams, data modeling, \n\
                development of views and functions (Stored Procedures) for the web systems development team.</p>\n\
                <p>Web developer analyst. Analysis, design, development and maintenance of web systems.</p>",
            es: "<p>Analista de base de datos con funciones de lider de proyecto. Manejo de equipos de trabajo, modelado de datos, \n\
                 desarrollo de vistas y funciones (Stored Procedures) para el equipo de desarrollo de sistemas web.</p>\n\
                <p>Analista programador web. Análisis, diseño, desarrollo y mantenimiento de sistemas web.</p>"        
        }
        
        var workExperience4Detail = {
            en: "<p>Analyst web developer. Part of the web systems development team.</>",
            es: "<p>Analista programador web. Parte del equipo de desarrollo de sistemas web.</p>"
        }
        
        /*var workExperience4Detail = {
            en: "<p>Analyst developer Lotus Notes R5 / R6. In charge of analysis and development of systems based on documentary data base, \n\
                workflow and email management.</p>",
            es: "<p>Analista programador Lotus Notes R5/R6. Encargado de análisis y desarrollo de sistemas basados en base de datos documentales, \n\
                workflow y gestión de correos electrónicos.</p>"
        }*/
        
                
        var technologiesUsed = {
            en: "Technologies Used:",
            es: "Tecnologías Utilizadas:"
        }
        
        var skillsAndTools = {
            en: "Skills & Tools",
            es: "Habilidades"
        }
        
        var databases = {
            en: "DATABASES",
            es: "BASES DE DATOS"
        }
        
        var education = {
            en: "Education",
            es: "Educaci&oacute;n"
        }
        
        var informaticsEngineer = {
            en: "Informatics Engineer",
            es: "Ingeniero en Informática"
        }
        
        var university = {
            en: "Alejandro de Humboltd University",
            es: "Universidad Alejandro de Humboltd"
        }
        
        var tsu = {
            en: "Degree Technician superior in Informatics",
            es: "TSU en Inform&aacutetica"
        }
        
        var language = {
            en: "Language",
            es: "Idiomas"
        }
        
        var spanish ={
            en: '<span class="resume-lang-name font-weight-bold">Spanish</span> <small class="text-muted font-weight-normal">(Native)</small>',
            es: '<span class="resume-lang-name font-weight-bold">Espa&ntilde;ol</span> <small class="text-muted font-weight-normal">(Nativo)</small>'
            
        }
        
        var english ={
            en: '<span class="resume-lang-name font-weight-bold">English</span> <small class="text-muted font-weight-normal">(Technical)</small>',
            es: '<span class="resume-lang-name font-weight-bold">Ingl&eacutes</span> <small class="text-muted font-weight-normal">(T&eacutecnico)</small>'
            
        }
        
        function changeLanguage()
        {
           _lang = $("#language").val();           
           $("#profession").html(profession[_lang]);
           $("#careerSumary").html(careerSumary[_lang]);
           $("#careerSumaryDetail").html(careerSumaryDetail[_lang]);
           $("#workExperience").html(workExperience[_lang]);
           $("#presentDate").html(presentDate[_lang]);
           $("#workExperience1Title").html(workExperience1Title[_lang]);
           $("#workExperience2Title").html(workExperience2Title[_lang]);
           $("#workExperience3Title").html(workExperience3Title[_lang]);
           $("#workExperience4Title").html(workExperience4Title[_lang]);
           $("#workExperience1Detail").html(workExperience1Detail[_lang]);           
           $("#workExperience2Detail").html(workExperience2Detail[_lang]);
           $("#workExperience3Detail").html(workExperience3Detail[_lang]);
           $("#workExperience4Detail").html(workExperience4Detail[_lang]);
           $("h4.technologiesUsed").html(technologiesUsed[_lang]);
           $("h2.skillsAndTools").html(skillsAndTools[_lang]);
           $("h4.databases").html(databases[_lang]);
           $("#education").html(education[_lang]);
           $("#informaticsEngineer").html(informaticsEngineer[_lang]);
           $("#university").html(university[_lang]);
           $("#language1").html(language[_lang]);
           $("#tsu").html(tsu[_lang]);
           $("#spanish").html(spanish[_lang]);
           $("#english").html(english[_lang]);
           
        }    