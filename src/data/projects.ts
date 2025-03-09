export interface ProjectMedia {
    type: 'video' | 'image';
    src: string;
    alt: string;
    description: string;
    aspectRatio?: '16:9' | '9:16' | '4:3' | '1:1';
  }
  
  export interface ProjectItem {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    media: {
        type: 'video' | 'image';
        src: string;
        aspectRatio: '16:9' | '9:16' | '4:3' | '1:1';
      };
    category: string[];         //'aerospace' | 'computer-science' | 'finance';
    technologies: string[];
    github?: string;
    additionalMedia: ProjectMedia[];
    achievements: string[];     
    isWide?: boolean;
    isVertical?: boolean;
    featured?: boolean;         // Mark featured projects
  }
  
  export const projects: ProjectItem[] = [
    {
        id: 'ex-1e-rocket',
        title: 'EX-1E Two-Stage Rocket Launch at SAC24',
        description: 'Co-led the development of EX-1E, a groundbreaking two-stage rocket that achieved historic success at the 2024 Spaceport America Cup.',
        longDescription: 'As part of WARR Rocketry\'s Project WESP, this project involved the development of EX-1E, a two-stage rocket that secured 3rd place in the highly competitive 30,000 ft COTS All propulsion types category at the 2024 Spaceport America Cup. The project marked a significant milestone as Europe\'s first student-developed staged rocket.',
        media: {
            type: 'image',
            src:  '/media/projects/13-EX-1E/EX-1E ESRA Livestream.png',
            aspectRatio: '1:1',
            },
        category: ['aerospace'],
        technologies: ['Systems Engineering', 'Composite Materials', 'Systems Integration', 'CNC Manufacturing', 'Avionics Design', 'Telemetry Systems'],
        additionalMedia: [
            // TODO: Add view videos and also make image fit so it doesnt get cut
            {
                type: 'image',
                src:  '/media/projects/13-EX-1E/EX-1E ESRA Livestream.png',
                alt: 'EX-1E Ignition at Spaceport America Cup 2024',
                description: 'Dramatic capture of EX-1E\'s launch sequence at SAC 2024, showcasing stage separation',
                aspectRatio: '1:1',
            },
            {
                type: 'image',
                src: '/media/projects/13-EX-1E/BE41A657-DD59-45B6-B7BB-AE251731CB82.jpg',
                alt: 'EX-1E Showcase',
                description: 'Post-recovery display in Munich, Germany, demonstrating the rocket\'s successful mission completion and structural integrity',
                aspectRatio: '9:16'
            },
            {
                type: 'image',
                src: '/media/projects/13-EX-1E/EX-1E Group Photo after Launch.jpg',
                alt: 'Project WESP Team Picture',
                description: 'The dedicated team behind EX-1E after nominal launch at SAC24',
                aspectRatio: '16:9'
            },
            {
                type: 'image',
                src: '/media/projects/13-EX-1E/EX-1E Staged.jpeg',
                alt: 'EX-1E during flight before staging',
                description: 'The rocket\'s initial phase before staging occured at SAC24',
                aspectRatio: '16:9'
            },
            {
                type: 'image',
                src: '/media/projects/13-EX-1E/EX-1E Separation.jpeg',
                alt: 'EX-1E during flight after staging',
                description: 'The rocket\'s last phase after staging occured, before reaching apogee of 7.8km at SAC24',
                aspectRatio: '16:9'
            }
        ],
        achievements: [
            'Designed and implemented a unique sideways recovery system for supersonic flight regimes (M 1.32)',
            'Achieved a target apogee of 27,297 ft with precise trajectory control',
            'Developed in-house carbon fiber structures using SRAD techniques',
            'Engineered weight-optimized CNC parts and custom flight computer',
            'Implemented real-time telemetry system using 2.4GHz LoRa technology',
            'Designed a sideways recovery system for the EX-1E\'s lower stage'
        ],
        featured: true,
        isWide: false
    },

    {
        id: 'rocket-hopper',
        title: 'Development and Control of a Rocket Hopper Demonstrator',
        description: 'Developed and implemented an advanced reinforcement learning control system for a cold gas-powered vertical takeoff and landing demonstrator.',
        longDescription: 'This project, conducted at TUM\'s Chair of Space Mobility and Propulsion, focused on creating a comprehensive digital twin simulation and implementing TD3 (Twin Delayed Deep Deterministic Policy Gradient) algorithms for precise altitude control of a single-degree-of-freedom rocket platform. The project demonstrated successful integration of advanced control theory with practical aerospace engineering, validating reinforcement learning approaches for rocket control applications.',
        media: {
            type: 'image',
            src: '/media/projects/01-RH/RH - RL Simulations.jpg',
            aspectRatio: '16:9'
            },
        category: ['computer-science', 'aerospace'],
        technologies: ['Reinforcement Learning', 'Control Systems', 'Python', 'EcoSim Pro', 'Teensy'],
        additionalMedia: [
            {
                type: 'image',
                src: '/media/projects/01-RH/RH.png',
                alt: 'Rocket Hopper Demonstrator setup',
                description: '3D model of the Rocket Hopper Demonstrator used for the test flights',
                aspectRatio: '1:1'
            },
            // {
            //     type: 'video',
            //     src: '/media/projects/01-RH/Rocket Hopper Demonstrator - Test Campaign Run.mp4',
            //     alt: 'Flight Test of the Rocket Hopper during test campaign',
            //     description: 'One of the 10+ physical flight tests during the test campaign',
            //     aspectRatio: '16:9'
            // },
            {
                type: 'image',
                src: '/media/projects/01-RH/RH - RL Simulations.jpg',
                alt: 'TD3 Controller performance plot',
                description: 'Comparison of simulated trajectory performance of TD3 controller against targets, showing altitude, pressure and acceleration',
                aspectRatio: '16:9'
            },
            {
                type: 'image',
                src: '/media/projects/01-RH/RH - EcosimPro.jpg',
                alt: 'Fluid System evaluation using Ecosim Pro',
                description: 'Fluid system validation and simulation using Ecosim Pro of the modeled test setup with pressurized gas tanks, valves, hose, and Rocket Hopper',
                aspectRatio: '16:9'
            }
        ],
        achievements: [
            'Developed comprehensive digital twin simulation incorporating fluid dynamics, valve behavior, and system kinematics',
            'Implemented TD3 reinforcement learning algorithm achieving 141.35 reward score, approaching classical PID controller performance',
            'Created fluid simulation model validated against EcoSimPro (ESA\'s official tool)',
            'Designed real-time control system interfacing with sensors at 60Hz frequency',
            'Achieved controlled flight with precision altitude management within 5m operational range'
        ],
        featured: true,
        isVertical: false
    },

    {
        id: 'wspr',
        title: 'WSPR (WESP\'s Predictive Rocketry Tool)',
        description: 'Advanced 6-DOF trajectory simulation software for WARR Rocketry\'s WESP team.',
        longDescription: 'WSPR is an advanced 6-DOF trajectory simulation software I developed and led for WARR Rocketry\'s WESP team. As the project lead, I managed a team of 14 developers and coordinated parallel development streams through weekly iteration meetings. The project evolved from a solid-motor-specific simulator to a comprehensive flight dynamics platform, demonstrating scalability and adaptability. After 1,200+ hours of development, WSPR has become an essential tool for WARR Rocketry\'s mission planning and safety analysis.',
        media: {
            type: 'image',
            src:  '/media/projects/18-WSPR/WSPR Podium Session Presentation.jpg',
            aspectRatio: '16:9',
            },
        category: ['aerospace', 'computer-science'],
        technologies: ['Python', 'Flight Dynamics', '6-DOF Simulation', 'Monte Carlo Analysis', 'Web Development'],
        additionalMedia: [
            {
                type: 'image',
                src: '/media/projects/18-WSPR/WSPR Podium Session Presentation.jpg',
                alt: 'Podium Session presentation of WSPR at Spaceport America Cup 2024 (SAC24)',
                description: 'Selected as one of the 18 teams to present their innovations due to proven excellence in the technical report submitted. Over 122 teams participated in SAC24',
                aspectRatio: '16:9'
            },
            {
                type: 'image',
                src: '/media/projects/18-WSPR/[Feat] AR Scenery.png',
                alt: 'WSPR 3D trajectory visualization',
                description: 'EX-1E detailed animated trajectory visualization computed using WSPR using 3D representations with geospatial data stored for the SAC24 launch site',
                aspectRatio: '16:9'
            },
            {
                type: 'image',
                src: '/media/projects/18-WSPR/[Feat] SR Straubing.svg',
                alt: 'WSPR safety range analysis',
                description: 'Monte Carlo simulation results showing landing probability distributions and safety zones for Straubing launch site, compared to OpenRocket predictions and real launch data',
                aspectRatio: '1:1'
            },
            // {
            //     type: 'video',
            //     src: '/media/projects/18-WSPR/[Feat] GUI 3.0.mp4',
            //     alt: 'WSPR graphical user interface (GUI)',
            //     description: 'Web-based interface showcasing the user-friendly design of WSPR, after 3 UIUX iterations',
            //     aspectRatio: '16:9'
            // },
            {
                type: 'image',
                src: '/media/projects/18-WSPR/[Feat] Report Automation.png',
                alt: 'WSPR report automated generation',
                description: 'Sample of the report automated generation feature for simulations using WSPR. Compiles detailed figures and explanations into results obtained',
                aspectRatio: '16:9'
            }
        ],
        achievements: [
            'Developed a comprehensive 6-DOF trajectory simulator with dynamic mass modeling',
            'Implemented DATCOM aerodynamic coefficient calculations for accurate flight predictions in supersonic regimes',
            'Created a safety range analysis system using Monte Carlo simulations',
            'Built a web-based GUI for improved accessibility and user experience',
            'Presented developments at SAC24, where 18 teams of the 122 participating were selected to present their engineering innovations in the field of rocketry',
            'Successfully validated the software against real flight data and OpenRocket simulations',
            'Developed an automated report generation for summarising simulation results for Safety Range Officers (SROs)'
        ],
        featured: true
    },
    {
        id: 'ex-1d',
        title: 'EX-1D. One-Stage Rocket Launch at Straubing',
        description: 'WESP\'s inaugural single-stage, solid propellant rocket development project.',
        longDescription: 'EX-1D represented WESP\'s inaugural rocket development project. As a founding project initiated in May 2023, the project focused on developing a single-stage solid propellant rocket.',
        media: {
            type: 'image',
            src:  '/media/projects/12-EX-1D/2024-04 STRAUBING/_1023273.jpg',
            aspectRatio: '16:9',
            },
        category: ['aerospace'],
        technologies: ['Rocket Systems', 'Rocket Launch', 'Systems Integration', 'Aerospace Design'],
        additionalMedia: [
            {
                type: 'image',
                src: '/media/projects/12-EX-1D/2023-09 DARE/P1320004.JPG',
                alt: 'Original team picture, September 2023',
                description: 'Team picture of Project WESP posing behind EX-1D, WESP\'s initial development at DARE\'s (TU Delft rocektry team) launch site',
                aspectRatio: '16:9'
            },
            {
                type: 'image',
                src: '/media/projects/12-EX-1D/2023-09 DARE/IMG_20230922_150242.jpg',
                alt: 'Ex-1D assembly before launch attempt, September 2023',
                description: 'Assembling EX-1D rocket\'s structural connectors before launch attempt at DARE',
                aspectRatio: '16:9'
            },
            {
                type: 'image',
                src: '/media/projects/12-EX-1D/2024-04 STRAUBING/EX-1D Launch Straubing.png',
                alt: 'EX-1D sideways recovery system stress test, April 2024',
                description: 'After the development of the sideways recovery system, we took the launch opportunity at Straubing to stress test the system in order to verify it could withstand supersonic-induced drag forces. The system performed nominally under straining circumstance, enduring 14Gs',
                aspectRatio: '16:9'
            },
            {
                type: 'image',
                src: '/media/projects/12-EX-1D/2024-04 STRAUBING/_1023273.jpg',
                alt: 'Post-launch analysis of recovery phase, April 2024',
                description: 'Retrieval and post-launch analysis of EX-1D\'s recovery system deployment after activation and landing',
                aspectRatio: '16:9'
            }
        ],
        achievements: [
            'Designed and integrated rocket systems for maiden flight',
            'Successfully handled COTS engine constraints',
            'Created foundation for future iterations for EX-1E',
            'Established effective systems engineering practices',
            'Participated in two launch attempts'
        ]
    },

    {
        id: 'asteroid-pose-estimation',
        title: 'Robust Pose Estimation for Asteroids (Master Thesis)',
        description: 'Developed a sophisticated Computer Vision pipeline for asteroid navigation and 3D model reconstruction of asteroids.',
        longDescription: 'This master\'s thesis project developed at DLR focused on creating a comprehensive Structure from Motion (SfM) system for autonomous asteroid navigation. The project implemented a robust feature detection and matching system, developed relative pose estimation algorithms, and created a dense depth map prediction system using structure from motion (SfM). The system was designed to work with uncertain scales and lighting conditions typical in asteroid environments.',
        media: {
            type: 'image',
            src:  '/media/projects/16-TFM/Feature Matcher - BFM.jpg',
            aspectRatio: '16:9',
            },
        category: ['computer-science', 'aerospace'],
        technologies: ['Computer Vision', 'Python', 'OpenCV', 'Deep Learning', '3D Reconstruction'],
        additionalMedia: [
            // {
            //     src: '/media/projects/x/asteroid-pose-pipeline.jpg',
            //     alt: 'Pipeline Architecture',
            //     description: 'Visual representation of the complete reconstruction pipeline from image input to 3D model output'
            // },
            {
                type: 'image',
                src: '/media/projects/16-TFM/Feature Detection - SIFT.png',
                alt: 'Feature detection implementation',
                description: 'Demonstration of keypoint detection in sequence of asteroid images at DLR',
                aspectRatio: '16:9'
            },
            {
                type: 'image',
                src: '/media/projects/16-TFM/Feature Matcher - BFM.jpg',
                alt: 'Feature matching implementation',
                description: 'Demonstration of keypoint matching between asteroid image pairs obtained from previous work at DLR',
                aspectRatio: '16:9'
            },
            // {
            //     src: '/media/projects/x/asteroid-pose-3d.jpg',
            //     alt: '3D model render',
            //     description: 'Final reconstructed asteroid model from multiple viewing angles'
            // }
        ],
        achievements: [
            'Implemented a robust feature detection and matching system for processing asteroid surface imagery',
            'Developed a relative pose estimation algorithm using Essential and Fundamental matrix calculations',
            'Created a dense depth map prediction system for 3D model reconstruction',
            'Built a complete 3D reconstruction pipeline integrating sparse and dense reconstruction methods',
            'Successfully implemented the pipeline using OpenCV and custom algorithms in Python'
        ],
        featured: true
    },

    {
        id: 'semesterarbeit',
        title: 'Synthetic Asteroid Dataset Generation',
        description: 'Developed data generation pipeline for asteroid exploration enhancing OAISYS.',
        longDescription: 'Developed an Enhanced Synthetic Data Generation Pipeline for Asteroid Exploration using DLR\'s OAISYS simulator. This research project addressed critical challenges in machine learning applications for asteroid exploration by creating comprehensive synthetic datasets.',
        media: {
            type: 'image',
            src:  '/media/projects/11-Semesterarbeit/Exploring Asteroids - A Survey (Semesterarbeit - Anibal Guerrero Hernandez).jpg',
            aspectRatio: '9:16',
            },
        category: ['computer-science', 'aerospace'],
        technologies: ['Computer Vision', 'Deep Learning', 'Python', 'Blender', 'R&D'],
        additionalMedia: [
            {
                type: 'image',
                src: '/media/projects/11-Semesterarbeit/Exploring Asteroids - A Survey (Semesterarbeit - Anibal Guerrero Hernandez).jpg',
                alt: 'Sample synthetic asteroid generated',
                description: 'RGB visualization of the synthetic asteroid model generated with the enhancement to OAISYS (DLR)',
                aspectRatio: '9:16'
            },
            {
                type: 'image',
                src: '/media/projects/11-Semesterarbeit/Aeroconf 2025.png',
                alt: 'Co-authored Aeroconf 2025 paper',
                description: 'Co-authored a paper for the IEEE Aerospace Conference 2025, focusing on landing trajectory simulations on asteroids - "Bridging the Data Gap of Asteroid Exploration: OAISYS Extension for Synthetic Asteroids Creation" (Paper No. 2696, 10.0815)',
                aspectRatio: '1:1'
            },
            {
                type: 'image',
                src: '/media/projects/11-Semesterarbeit/Object Detection Implementation.png',
                alt: 'YOLOv7 object detection',
                description: 'Integrated with YOLOv7 object detection processing after synthetic asteroid image dataset is generated',
                aspectRatio: '1:1'
            },
            {
                type: 'image',
                src: '/media/projects/11-Semesterarbeit/Trajectory Generation OAISYS.png',
                alt: 'Trajectory Generation',
                description: 'Sample trajectory simulation implemented in the enhanced OAISYS for asteroids (direct, retrograde, and polar). Trajectory calculations use the model\'s size and orbital characteristics to calcuate moments of inertia and principal axes',
                aspectRatio: '1:1'                                                                                                                                                                                                                 
            }
        ],
        achievements: [
            'Designed novel pipeline enhancing OAISYS capabilities with asteroid trajectory generation',
            'Created comprehensive RGB-D images, depth maps and 6D pose data',
            'Co-authored paper submitted to AeroConf 2025 IEEE Aerospace Conference',
            'Generated over 30,000 diverse asteroid samples',
            'Successfully integrated with YOLOv7 object detection'
        ],
    },

    {
        id: 'rpii',
        title: 'Advanced Bi-Propellant Rocket Propulsion System',
        description: 'Design of a LOX/LCH4 propulsion system for medium-sized launcher.',
        longDescription: 'Led the propulsion system design for a medium-sized launcher system as part of Team Saturn V, focusing on developing a bi-propellant rocket engine using liquid oxygen (LOX) and liquid methane (LCH4). The project aimed to deliver a cost-effective solution for ESA and commercial missions with a payload capacity of up to 5,000 kg to Low Earth Orbit (LEO).',
        media: {
            type: 'image',
            src:  '/media/projects/06-RPII/RPII P&ID.png',
            aspectRatio: '1:1',
            },
        category: ['aerospace'],
        technologies: ['MATLAB', 'GMAT', 'P&ID', 'Propulsion Design', 'Gas Dynamics'],
        additionalMedia: [
            {
                type: 'image',
                src: '/media/projects/06-RPII/RPII P&ID.png',
                alt: 'P&ID of Propulsion System',
                description: 'Detailed schematic showing complete propellant flow paths and control systems',
                aspectRatio: '1:1'
            },
            {
                type: 'image',
                src: '/media/projects/06-RPII/RPII - Nozzle Design.jpg',
                alt: 'Nozzle Design',
                description: 'MATLAB-generated bell nozzle geometry showing optimized expansion ratio',
                aspectRatio: '16:9'
            }
        ],
        achievements: [
            'Designed gas generator cycle propulsion system operating at 100 bar chamber pressure',
            'Engineered dual-turbine system with optimized serial arrangement achieving 93% efficiency',
            'Created detailed thermal analysis model for regenerative and film cooling',
            'Implemented advanced bell nozzle design using MATLAB',
            'Won "Best Team Spirit" award for exceptional collaboration'
        ]
    },

    {
        id: 'spi',
        title: 'Phobos Explorer Propulsion System',
        description: 'Advanced propulsion system design for Phobos exploration mission.',
        longDescription: 'Led the design and analysis of an advanced spacecraft propulsion system for a Phobos exploration mission. As part of a four-person team, developed a sophisticated bi-propellant propulsion architecture optimized for a two-year mission to Mars\' largest moon.',
        media: {
            type: 'image',
            src:  '/media/projects/09-SPI/SPI P&ID.png',
            aspectRatio: '1:1',
            },
        category: ['aerospace'],
        technologies: ['MATLAB', 'GMAT', 'P&ID', 'Mission Analysis', 'Systems Engineering', 'Trajectory Optimization'],
        additionalMedia: [
            {
                type: 'image',
                src: '/media/projects/09-SPI/SPI P&ID.png',
                alt: 'P&ID of Propulsion System',
                description: 'Detailed propulsion system schematic showing component layout with valves, regulators, tanks, ADCS and main thrusters',
                aspectRatio: '9:16'
            },
            {
                type: 'image',
                src: '/media/projects/09-SPI/reaction wheel implementation.png',
                alt: 'Reaction Wheel implementation',
                description: '3D visualization showing the reaction wheels used for ADCS of the proposed satellite. Sizing performed with MATLAB iterative script using selected requirements and other systems',
                aspectRatio: '1:1'
            }
        ],
        achievements: [
            'Designed pressure-fed propulsion system with Hydrazine and MON-3',
            'Engineered trajectory analysis achieving ΔV budget of 3.25 km/s',
            'Developed detailed mission sequence with multiple burns',
            'Created complete P&ID system architecture'
        ]
    },

    {
        id: 'smd',
        title: 'Comet Explorers Mission',
        description: 'Design of comet mining mission targeting MBC 324P/La Sagra.',
        longDescription: 'Led the trajectory design and development for an innovative comet exploration mission as part of a 4-person team at TUM\'s Chair of Pico and Nano Satellites. The mission focused on mining and analyzing Main-Belt Comet 324P/La Sagra using SpaceX\'s Starship platform.',
        media: {
            type: 'image',
            src:  '/media/projects/08-SMD/Payload Strategy.png',
            aspectRatio: '1:1',
            },
        category: ['aerospace'],
        technologies: ['Mission Analysis', 'Orbital Mechanics', 'Power Systems', 'MATLAB/GMAT', 'Trajectory Design'],
        additionalMedia: [
            {
                type: 'image',
                src: '/media/projects/08-SMD/Spacecraft Representation.svg',
                alt: '3D Spacecraft Representation',
                description: 'Visual representation of complete spacecraft and all modules developed for the mission operations',
                aspectRatio: '4:3'
            },
            {
                type: 'image',
                src: '/media/projects/08-SMD/Spacecraft Representation-1.svg',
                alt: '3D Spacecraft Representation',
                description: 'Visual representation of complete spacecraft and all modules developed for the mission operations',
                aspectRatio: '16:9'
            },
            {
                type: 'image',
                src: '/media/projects/08-SMD/Payload Strategy.png',
                alt: 'Payload Strategy',
                description: 'Python calculations of payload strategy when using RASSOR for mining operations. Mass degradation figure of how resource-intensive it is to extract O2 from comet ice',
                aspectRatio: '1:1'
            },
            {
                type: 'image',
                src: '/media/projects/08-SMD/3D Topology Analysis of Comet 324P La Sagra.png',
                alt: 'Topology Study of 324P/La Sagra',
                description: 'MATLAB 3D representation of the target\'s topology, identifying optimal landing regions',
                aspectRatio: '1:1'
            }
        ],
        achievements: [
            'Developed comprehensive mission architecture and trajectory design',
            'Created modular spacecraft design with multiple specialized components',
            'Analysed technical viability of resource extraction and utilization with RASSOR mining technology',
            'Implemented MATLAB/GMAT simulation framework',
            'Designed custom numerical porkchop plot algorithm'
        ],
    },
    
    {
        id: 'sdf',
        title: 'Ocean Plastic Detection Satellite',
        description: 'Earth observation satellite design for mapping ocean plastic pollution.',
        longDescription: 'Led the power systems design for an innovative Earth observation satellite project at TUM\'s Chair of Pico and Nano Satellites. The mission focused on detecting and mapping ocean plastic pollution using advanced optical instrumentation, working within a team of 6-8 engineers.',
        media: {
            type: 'image',
            src:  '/media/projects/07-SDF/MATLAB SSO Script.png',
            aspectRatio: '1:1',
            },
        category: ['aerospace'],
        technologies: ['MATLAB', 'GMAT', 'Systems Engineering', 'Power Systems', 'Thermal Control', 'AOCS'],
        additionalMedia: [
            {
                type: 'image',
                src: '/media/projects/07-SDF/MATLAB SSO Script.png',
                alt: 'System Architecture modeling in MATLAB',
                description: 'Complete spacecraft system architecture modeling in MATLAB showing interfaces between subsystems',
                aspectRatio: '16:9'
            },
            {
                type: 'image',
                src: '/media/projects/07-SDF/Satellite Design Breakdown.png',
                alt: 'Satellite Design 3D representation',
                description: 'Breakdown of the satellite design developed for an SSO satellite that will map ocen plastic movements',
                aspectRatio: '16:9'
            },
            {
                type: 'image',
                src: '/media/projects/07-SDF/Orbital Selection - GMAT.png',
                alt: 'Orbit Analysis',
                description: 'GMAT representation of ground track and coverage analysis showing observation patterns',
                aspectRatio: '16:9'
            },
            {
                type: 'image',
                src: '/media/projects/07-SDF/Orbital Selection 2 - GMAT.png',
                alt: 'Orbit Analysis',
                description: 'GMAT representation of ground track and coverage analysis showing observation patterns',
                aspectRatio: '16:9'
            }
        ],
        achievements: [
            'Designed complete power subsystem including solar array and battery sizing',
            'Engineered optical payload achieving 20m ground sampling distance',
            'Created comprehensive mission architecture for LEO operations',
            'Implemented thermal control system for -30°C to 60°C range',
            'Developed detailed mass, power, and link budgets'
        ]
    },

    {
        id: 'spacecraft-operations',
        title: 'Spacecraft Operations for Lunar Mining',
        description: 'Led a critical mission analysis and system design project for a lunar mining demonstration spacecraft.',
        longDescription: 'This project focused on validating technologies for future asteroid and comet mining operations, specifically targeting water ice extraction in lunar polar regions. It involved designing a comprehensive spacecraft system architecture, developing and simulating a 4-day ballistic transfer trajectory from Earth to Moon, and engineering sophisticated power and communication systems.',
        media: {
            type: 'image',
            src:  '/media/projects/15-Spacecraft Operations/Translunar Injection Maneuver.jpg',
            aspectRatio: '1:1',
            },
        category: ['aerospace'],
        technologies: [ 'STK', 'MATLAB', 'Mission Analysis', 'Orbital Mechanics', 'Systems Engineering', 'Propulsion Systems', '3D Modeling', 'R&D'],
        additionalMedia: [
            {
                type: 'image',
                src: '/media/projects/15-Spacecraft Operations/Translunar Injection Maneuver.jpg',
                alt: 'STK Trajectory Visualization of TLI Maneuver',
                description: '4-day ballistic transfer trajectory from Earth to Moon, showing key mission phases including TLI and LOI maneuvers',
                aspectRatio: '16:9'
            },

            {
                type: 'image',
                src: '/media/projects/15-Spacecraft Operations/Lunar Orbiting.jpg',
                alt: 'STK Trajectory Visualization of Lunar Orbiting',
                description: 'Showing lunar orbiting phase of Moon Explorer around Moon before descent',
                aspectRatio: '16:9'
            },
            {
                type: 'image',
                src: '/media/projects/15-Spacecraft Operations/Translunar Injection Maneuver.jpg',
                alt: 'STK Trajectory Visualization of Descent',
                description: 'Showing final descent phase of Moon Explorer onto lunar landing site',
                aspectRatio: '16:9'
            },
            {
                type: 'image',
                src: '/media/projects/15-Spacecraft Operations/Final Approximation of OR and ER to Landing Site.jpg',
                alt: 'Final Approximation of OR and ER to Landing Site',
                description: 'Showing final descent phase of Moon Explorer onto lunar landing site',
                aspectRatio: '16:9'
            }
        ],
        achievements: [
            'Designed a comprehensive spacecraft system architecture integrating multiple modules',
            'Developed and simulated a 4-day ballistic transfer trajectory from Earth to Moon using STK',
            'Engineered a sophisticated power system utilizing dual deployable solar array wings and Li-ion batteries',
            'Implemented dual-band communication system (Ka-band for science data, X-band for TT&C)',
            'Designed precise attitude determination and control system achieving 0.05-degree pointing accuracy'
        ]
    },
    {
        id: 'asteroid-mining-study',
        title: 'Asteroid Mining Corporation Scoping Study',
        description: 'Conducted a comprehensive feasibility study for mining near-Earth asteroids, combining technical analysis with market research.',
        longDescription: 'During an internship at Asteroid Mining Corporation Ltd, this project involved performing a technical viability assessment of near-Earth asteroid mining operations using current terrestrial mining technologies. The study included detailed market forecasts, evaluation of resource extraction methodologies, and analysis of their economic viability in space conditions.',
        media: {
            type: 'image',
            src:  '/media/projects/14-AMC/AMC SCAR-E.jpeg',
            aspectRatio: '16:9',
            },
        category: ['aerospace'],
        technologies: ['Space Mining Technology', 'Market Analysis', 'Technical Feasibility Studies', 'Economic Modeling', 'R&D'],
        additionalMedia: [
            {
                type: 'image',
                src: '/media/projects/14-AMC/AMC SCAR-E.jpeg',
                alt: 'AMC\'s SCAR-E Robot',
                description: 'Robot AMC Ltd. will be using for their first prospective asteroid mining mission',
                aspectRatio: '16:9'
            },
            {
                type: 'image',
                src: '/media/projects/14-AMC/Asteroid Belt.png',
                alt: 'Asteroid Belt - Endless Possibilities',
                description: 'The Solar System\'s asteroid belt, showing the potential of asteroid mining for resource extraction in space',
                aspectRatio: '16:9'
            }
        ],
        achievements: [
            // Include meteor price for excellence as one of the best interns
            'Obtained excellence award for selective few best interns of the promotion, in the form of a meteor piece',
            'Performed technical viability assessment of near-Earth asteroid mining operations',
            'Developed detailed market forecasts to identify future resource demands and market opportunities',
            'Evaluated and adapted terrestrial mining technologies for space applications',
            'Analyzed resource extraction methodologies and their economic viability in space conditions',
            'Produced a comprehensive scoping study integrating technical, economic, and market analyses'
        ]
    },

    {
        id: 'ismle',
        title: 'CFD Flow Field Prediction using CNNs',
        description: 'Deep learning application for autoregressive prediction of CFD flow fields.',
        longDescription: 'Developed and implemented a Convolutional Neural Network (CNN) for autoregressive prediction of Computational Fluid Dynamics (CFD) flow fields as part of TUM\'s Machine Learning for Engineers course. This project combined theoretical machine learning concepts with practical engineering applications, leveraging both supervised and unsupervised learning approaches.',
        media: {
            type: 'image',
            src:  '/media/projects/05-ISMLE/Fluid Dynamics CNN.jpeg',
            aspectRatio: '16:9',
            },
        category: ['computer-science'],
        technologies: ['Deep Learning', 'Python', 'CFD', 'Neural Networks', 'Scientific Computing'],
        additionalMedia: [
            {
                type: 'image',
                src: '/media/projects/05-ISMLE/GAN.png',
                alt: 'GAN Model Architecture',
                description: 'Visual representation of the generative autoencoder structure used for flow field prediction',
                aspectRatio: '16:9'
            },
            {
                type: 'image',
                src: '/media/projects/05-ISMLE/Fluid Dynamics CNN.jpeg',
                alt: 'Flow Predictions',
                description: 'Comparison between predicted and actual CFD flow fields',
                aspectRatio: '16:9'
            }
        ],
        achievements: [
            'Designed and implemented CNN architecture for flow field prediction',
            'Applied both classical ML techniques and deep learning approaches',
            'Developed optimization algorithms including gradient descent and Adam',
            'Created Bayesian inference models for uncertainty quantification',
            'Achieved significant performance improvements through hyperparameter optimization'
        ]
    },
    
    {
        id: 'adversarial-attack',
        title: 'Neural Network Adversarial Attacks',
        description: 'Investigation of CNN vulnerabilities using FGSM attacks.',
        longDescription: 'Conducted an in-depth investigation into the vulnerability of Convolutional Neural Networks to adversarial attacks, comparing LeNet and ResNet-18 architectures using MNIST and CIFAR-10 datasets.',
        media: {
            type: 'image',
            src:  '/media/projects/03-HODL/Adversarial Attack.png',
            aspectRatio: '1:1',
            },
        category: ['computer-science'],
        technologies: ['Deep Learning', 'PyTorch', 'Computer Vision', 'Neural Network Security', 'Algorithm Development'],
        additionalMedia: [
            {
                type: 'image',
                src: '/media/projects/03-HODL/LeNet.png',
                alt: 'LeNet Architecture',
                description: 'Visual representation of LeNet architecture',
                aspectRatio: '1:1'
            },
            {
                type: 'image',
                src: '/media/projects/03-HODL/Adversarial Attack.png',
                alt: 'Adversarial Examples',
                description: 'Visualization showing original and retrieved output comparison after adversarial attack',
                aspectRatio: '1:1'
            }
        ],
        achievements: [
            'Implemented FGSM attack algorithm for adversarial example generation',
            'Achieved 98.1% and 99.1% baseline accuracy for LeNet and ResNet-18',
            'Created comprehensive visualization system for adversarial perturbations',
            'Developed model evaluation framework for adversarial robustness',
            'Designed and implemented defense strategies against adversarial attacks'
        ]
    },

    {
        id: 'financial-market-simulator',
        title: 'Financial Market Simulator',
        description: 'Developed a C++ application to simulate real-world stock market dynamics using user-selected financial strategies and real S&P500 market data.',
        longDescription: 'The Financial Market Simulator is a C++ application designed to mimic real-world stock market dynamics by integrating user-selected financial strategies and real S&P500 market data. This simulator operates in two main modules - User Portfolio and Market Simulation. It leverages Geometric Brownian Motion (GBM) for stock price movement prediction and allows users to simulate multiple investment timelines.',
        media: {
            type: 'image',
            src:  '/media/projects/02-AP/GBM.png',
            aspectRatio: '9:16',
            },
        category: ['finance', 'computer-science'],
        technologies: ['C++', 'Geometric Brownian Motion', 'Object-Oriented Design', 'Stochastic Processes', 'Quantitative Analysis'],
        additionalMedia: [
            {
                type: 'image',
                src: '/media/projects/02-AP/GBM.png',
                alt: 'Geometric Brownian Motion Stock Simulation',
                description: 'A sample output from the Geometric Brownian Motion simulation, showing stock price fluctuations over time',
                aspectRatio: '9:16'
            },
            {
                type: 'image',
                src: '/media/projects/02-AP/breakdown.png',
                alt: 'User Portfolio Selection Screen',
                description: 'Framework development breakdown into subcomponents modeled for market simulation and default strategies presented to user',
                aspectRatio: '9:16'
            }
        ],
        achievements: [
            'Implemented Geometric Brownian Motion for realistic stock price movement simulation',
            'Developed user portfolio module allowing customized risk profiles and asset allocation',
            'Created market simulation module for real-time price adjustments based on historical S&P500 data',
            'Achieved significant performance improvements through STL optimization and vectorized computations',
            'Successfully simulated multiple investment timelines with varying asset allocations'
        ]
    },

    {
        id: 'chat-application',
        title: 'Interactive Web Chat Application',
        description: 'Real-time web-based chat interface with modern features.',
        longDescription: 'Developed a fully functional web-based chat application through TUM\'s Make Your Own App course, progressing from basic HTML/CSS implementation to advanced JavaScript functionality.',
        media: {
            type: 'image',
            src:  '/media/projects/04-IP/MYOA Banner.webp',
            aspectRatio: '16:9',
            },
        category: ['computer-science'],
        technologies: ['HTML5/CSS3', 'JavaScript', 'jQuery', 'AJAX', 'Responsive Design'],
        additionalMedia: [
            {
                type: 'image',
                src: '/media/projects/04-IP/Chatter App Example 1.png',
                alt: 'Application Design & Interface',
                description: 'Screenshot of the final chat application showing main features',
                aspectRatio: '16:9'
            },
            {
                type: 'image',
                src: '/media/projects/04-IP/Chatter App Example 2.png',
                alt: 'Application Design & Interface',
                description: 'Screenshot of the final chat application showing how to add new channels',
                aspectRatio: '16:9'
            }
        ],
        achievements: [
            'Created responsive UI layout using HTML5 and advanced CSS3 properties',
            'Implemented real-time chat functionality using AJAX and JSON',
            'Developed cross-browser compatible interface',
            'Implemented user authentication and session management',
            'Created dynamic content loading using web APIs'
        ]
    }

  ];

  
// Helper function to get featured projects
export const getFeaturedProjects = () => projects.filter(project => project.featured);