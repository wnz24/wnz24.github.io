const projects = [
    {
        icon: '🎮',
        title: 'Neon Runner',
        shortDesc: 'A fast-paced endless runner set in a cyberpunk city',
        fullDesc: 'Neon Runner is an adrenaline-pumping endless runner that takes players through a vibrant cyberpunk metropolis. The game features a sophisticated procedural generation system that creates unique levels every time, ensuring no two runs are ever the same. Players navigate through neon-lit streets, dodging obstacles, and collecting power-ups while the difficulty progressively increases.',
        role: 'Lead Developer & Technical Designer',
        duration: '8 months (Jan 2023 - Aug 2023)',
        team: '4 developers, 2 artists, 1 sound designer',
        features: [
            'Advanced procedural level generation with weighted difficulty curves',
            'Dynamic weather system affecting gameplay mechanics',
            'Custom shader effects for neon lighting and particle systems',
            'Leaderboard integration with anti-cheat measures',
            'Achievement system with 50+ unlockable rewards',
            'Responsive controls optimized for mobile devices'
        ],
        challenges: [
            'Optimizing procedural generation for mobile platforms without compromising visual quality',
            'Balancing difficulty progression to maintain player engagement',
            'Implementing efficient object pooling for smooth 60 FPS gameplay'
        ],
        tech: ['Unity 2021', 'C#', 'DOTween', 'Addressables', 'Unity Analytics', 'PlayFab'],
        github: '#',
        demo: '#'
    },
    {
        icon: '⚔️',
        title: 'Shadow Realm',
        shortDesc: '2D action RPG with hand-drawn animations',
        fullDesc: 'Shadow Realm is a dark fantasy 2D action RPG that combines fluid combat mechanics with a deep, branching narrative. Players explore a beautifully crafted world filled with dangerous enemies, hidden secrets, and moral choices that impact the story. Every animation is hand-drawn, giving the game a unique artistic style.',
        role: 'Gameplay Programmer & Combat Designer',
        duration: '14 months (Mar 2022 - May 2023)',
        team: '6 developers, 3 artists, 1 writer, 1 composer',
        features: [
            'Frame-perfect combat system with 8 unique weapon types',
            'Branching narrative with 5 different endings',
            'Over 200 hand-drawn enemy animations',
            'Dynamic music system that responds to combat intensity',
            'Skill tree with 60+ unique abilities',
            'New Game+ mode with enhanced difficulty'
        ],
        challenges: [
            'Creating tight, responsive combat controls in a 2D environment',
            'Managing complex state machines for enemy AI behaviors',
            'Optimizing rendering for dozens of simultaneous particle effects'
        ],
        tech: ['Unreal Engine 4', 'Blueprint', 'Paper2D', 'Wwise Audio', 'Perforce'],
        github: '#',
        demo: '#'
    },
    {
        icon: '🌌',
        title: 'Void Explorer',
        shortDesc: 'Space exploration with realistic physics',
        fullDesc: 'Void Explorer is an ambitious space exploration game that emphasizes realistic physics and survival mechanics. Players pilot their spacecraft through a procedurally generated universe, managing resources, discovering new planets, and encountering both friendly and hostile alien civilizations. The game features a full Newtonian physics engine for authentic space flight.',
        role: 'Lead Programmer & Systems Designer',
        duration: '18 months (Sep 2021 - Mar 2023)',
        team: '5 developers, 2 artists, 1 sound designer',
        features: [
            'Full 3D Newtonian physics for realistic space flight',
            'Procedurally generated universe with billions of star systems',
            'Complex resource management and crafting system',
            'Dynamic faction relationships and diplomacy',
            'Planetary landing and exploration mechanics',
            'Mod support with custom scripting API'
        ],
        challenges: [
            'Implementing stable Newtonian physics at astronomical scales',
            'Creating an efficient LOD system for rendering at multiple scales',
            'Designing intuitive controls for 6-degrees-of-freedom movement'
        ],
        tech: ['Godot 3.5', 'GDScript', 'Custom Physics Engine', 'SQLite', 'WebSocket'],
        github: '#',
        demo: '#'
    },
    {
        icon: '🧩',
        title: 'Quantum Puzzle',
        shortDesc: 'Mind-bending puzzle game with quantum mechanics',
        fullDesc: 'Quantum Puzzle is an innovative puzzle game that makes quantum mechanics concepts accessible through engaging gameplay. Players manipulate quantum states, create superpositions, and solve increasingly complex puzzles that would make Schrödinger proud. The game serves as both entertainment and education.',
        role: 'Solo Developer',
        duration: '6 months (Jul 2023 - Dec 2023)',
        team: 'Solo project with contracted art and music',
        features: [
            'Intuitive visualization of quantum concepts',
            '100+ hand-crafted puzzle levels',
            'Level editor with community sharing features',
            'Progressive difficulty with educational hints',
            'Minimalist art style that emphasizes clarity',
            'Ambient soundtrack that enhances concentration'
        ],
        challenges: [
            'Making complex quantum concepts understandable through gameplay',
            'Designing puzzles that are challenging but not frustrating',
            'Creating clear visual feedback for abstract concepts'
        ],
        tech: ['Unity 2022', 'C#', 'DOTween', 'Steam Workshop API', 'Unity UI Toolkit'],
        github: '#',
        demo: '#'
    },
    {
        icon: '🏆',
        title: 'Arena Clash',
        shortDesc: 'Competitive multiplayer battle arena',
        fullDesc: 'Arena Clash is a fast-paced multiplayer battle arena game featuring intense 5v5 matches. With a roster of 20 unique characters, each with distinct abilities and playstyles, the game offers deep strategic gameplay and high skill ceiling. Regular content updates keep the meta fresh and exciting.',
        role: 'Network Programmer & Gameplay Engineer',
        duration: '20 months (Jan 2022 - Aug 2023)',
        team: '12 developers, 5 artists, 2 game designers, 1 community manager',
        features: [
            'Dedicated server architecture with lag compensation',
            '20 unique characters with over 80 abilities',
            'Ranked matchmaking with ELO rating system',
            'Spectator mode with replay system',
            'Seasonal content with new characters and maps',
            'Anti-cheat system and report functionality'
        ],
        challenges: [
            'Implementing client-side prediction and server reconciliation',
            'Balancing characters for competitive play',
            'Optimizing network traffic for smooth 60-tick servers'
        ],
        tech: ['Unreal Engine 5', 'C++', 'Photon Server', 'AWS', 'PostgreSQL', 'Redis'],
        github: '#',
        demo: '#'
    },
    {
        icon: '🎨',
        title: 'Shader Toolkit',
        shortDesc: 'Custom shaders optimized for mobile',
        fullDesc: 'Shader Toolkit is a comprehensive collection of optimized shaders and visual effects designed specifically for mobile game development. The toolkit includes water shaders, toon shading, particle effects, and post-processing effects, all optimized to run smoothly on mobile devices without sacrificing visual quality.',
        role: 'Technical Artist & Shader Developer',
        duration: 'Ongoing (Started Mar 2023)',
        team: 'Solo project with community contributions',
        features: [
            '50+ production-ready shader effects',
            'Optimized for mobile GPU architectures',
            'Extensive documentation with usage examples',
            'Compatible with Unity and Unreal Engine',
            'Performance profiling tools included',
            'Regular updates based on community feedback'
        ],
        challenges: [
            'Achieving console-quality visuals within mobile performance budgets',
            'Maintaining compatibility across different GPU vendors',
            'Creating user-friendly interfaces for shader customization'
        ],
        tech: ['HLSL', 'GLSL', 'ShaderLab', 'Amplify Shader Editor', 'RenderDoc'],
        github: '#',
        demo: '#'
    }
];