const coursesData = [
    {
      id: 1,
      name: 'Introduction to React Native',
      instructor: 'John Doe',
      description: 'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Open',
      thumbnail: '/images/course-1.jpg',
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        { week: 1, topic: 'Introduction to React Native', content: 'Overview of React Native, setup environment.' },
        { week: 2, topic: 'Building Your First App', content: 'Creating a simple mobile app using React Native.' },
      ],
      students: [
        { id: 101, name: 'Alice Johnson', email: 'alice@example.com' },
        { id: 102, name: 'Bob Smith', email: 'bob@example.com' },
      ],
    },
    {
      id: 2,
      name: 'JavaScript Essentials',
      instructor: 'Jane Smith',
      description: 'Master JavaScript from scratch with hands-on projects.',
      enrollmentStatus: 'Open',
      thumbnail: "/images/course-2.jpeg",
      duration: '6 weeks',
      schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
      location: 'Online',
      prerequisites: ['None'],
      syllabus: [
        { week: 1, topic: 'JS Basics', content: 'Variables, data types, functions.' },
        { week: 2, topic: 'DOM Manipulation', content: 'Handling UI interactions using JavaScript.' },
      ],
      students: [
        { id: 103, name: 'Charlie Brown', email: 'charlie@example.com' },
      ],
    },
    {
      id: 3,
      name: 'Full Stack Web Development',
      instructor: 'Michael Johnson',
      description: 'Become a full-stack developer using MERN stack.',
      enrollmentStatus: 'Open',
      thumbnail: '/images/course-3.jpeg',
      duration: '12 weeks',
      schedule: 'Fridays and Saturdays, 5:00 PM - 7:00 PM',
      location: 'Hybrid (Online & Offline)',
      prerequisites: ['HTML', 'CSS', 'Basic JavaScript'],
      syllabus: [
        { week: 1, topic: 'Frontend Basics', content: 'HTML, CSS, Bootstrap.' },
        { week: 2, topic: 'JavaScript & React', content: 'React basics, hooks, state management.' },
      ],
      students: [
        { id: 104, name: 'David Warner', email: 'david@example.com' },
      ],
    },
    {
      id: 4,
      name: 'Python for Data Science',
      instructor: 'Emily Watson',
      description: 'Learn Python and its applications in Data Science.',
      enrollmentStatus: 'Open',
      thumbnail: '/images/course-4.jpg',
      duration: '10 weeks',
      schedule: 'Weekends, 10:00 AM - 1:00 PM',
      location: 'Online',
      prerequisites: ['Basic Python knowledge'],
      syllabus: [
        { week: 1, topic: 'Python Basics', content: 'Variables, loops, functions.' },
        { week: 2, topic: 'Data Analysis', content: 'Using Pandas and NumPy for analysis.' },
      ],
      students: [
        { id: 105, name: 'Sophia Miller', email: 'sophia@example.com' },
      ],
    },
    {
      id: 5,
      name: 'Machine Learning with Python',
      instructor: 'William Anderson',
      description: 'Build ML models using Python and Scikit-Learn.',
      enrollmentStatus: 'Closed',
      thumbnail: '/images/course-5.jpeg',
      duration: '14 weeks',
      schedule: 'Tuesdays and Fridays, 6:00 PM - 9:00 PM',
      location: 'Online',
      prerequisites: ['Python', 'Data Science Basics'],
      syllabus: [
        { week: 1, topic: 'Intro to ML', content: 'Understanding ML fundamentals.' },
        { week: 2, topic: 'Supervised Learning', content: 'Linear regression, decision trees.' },
      ],
      students: [
        { id: 106, name: 'Ethan Scott', email: 'ethan@example.com' },
      ],
    },
    {
      id: 6,
      name: 'Cyber Security Basics',
      instructor: 'Richard Miles',
      description: 'Learn about ethical hacking and cyber security fundamentals.',
      enrollmentStatus: 'Open',
      thumbnail: '/images/course-6.jpg',
      duration: '6 weeks',
      schedule: 'Wednesdays and Saturdays, 8:00 PM - 10:00 PM',
      location: 'Hybrid',
      prerequisites: ['Basic Networking Knowledge'],
      syllabus: [
        { week: 1, topic: 'Cyber Security Basics', content: 'Understanding security threats.' },
        { week: 2, topic: 'Ethical Hacking', content: 'Penetration testing basics.' },
      ],
      students: [
        { id: 107, name: 'Anna Clark', email: 'anna@example.com' },
      ],
    },
    {
      id: 7,
      name: 'DevOps Fundamentals',
      instructor: 'Laura Jones',
      description: 'Learn CI/CD, Docker, Kubernetes, and more.',
      enrollmentStatus: 'In Progress',
      thumbnail: '/images/course-7.jpg',
      duration: '8 weeks',
      schedule: 'Thursdays and Sundays, 7:00 PM - 9:00 PM',
      location: 'Online',
      prerequisites: ['Basic Linux Commands'],
      syllabus: [
        { week: 1, topic: 'Intro to DevOps', content: 'Understanding DevOps culture.' },
        { week: 2, topic: 'CI/CD Pipelines', content: 'Jenkins, GitHub Actions.' },
      ],
      students: [
        { id: 108, name: 'James Carter', email: 'james@example.com' },
      ],
    },
    {
      id: 8,
      name: 'UI/UX Design Masterclass',
      instructor: 'Sarah Williams',
      description: 'Design beautiful and user-friendly interfaces.',
      enrollmentStatus: 'Open',
      thumbnail: '/images/course-8.jpeg',
      duration: '5 weeks',
      schedule: 'Fridays, 5:00 PM - 8:00 PM',
      location: 'Offline (Delhi)',
      prerequisites: ['None'],
      syllabus: [
        { week: 1, topic: 'UI Basics', content: 'Principles of good UI design.' },
        { week: 2, topic: 'UX Research', content: 'User research and wireframing.' },
      ],
      students: [],
    },
    {
      id: 9,
      name: 'Android App Development',
      instructor: 'Kevin Martinez',
      description: 'Develop Android apps using Kotlin.',
      enrollmentStatus: 'Open',
      thumbnail: '/images/course-9.jpeg',
      duration: '10 weeks',
      schedule: 'Tuesdays, 6:30 PM - 8:30 PM',
      location: 'Online',
      prerequisites: ['Basic Java/Kotlin Knowledge'],
      syllabus: [],
      students: [],
    },
    {
      id: 10,
      name: 'Game Development with Unity',
      instructor: 'Daniel Roberts',
      description: 'Create 2D & 3D games using Unity and C#.',
      enrollmentStatus: 'Closed',
      thumbnail: '/images/course-10.jpg',
      duration: '12 weeks',
      schedule: 'Weekends, 4:00 PM - 7:00 PM',
      location: 'Hybrid',
      prerequisites: ['C# Basics'],
      syllabus: [],
      students: [],
    }
  ];
  
  export default coursesData;
  