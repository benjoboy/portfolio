export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black-50 to-black-100 dark:from-black-800 dark:to-black-700">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Benjamin Serec
                        </h1>
                        <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-8"></div>
                    </div>

                    {/* Main Content */}
                    <div className="bg-black dark:bg-black-800 rounded-lg shadow-xl p-8 mb-8">
                        <div className="prose prose-lg max-w-none dark:prose-invert">
                            <p className="text-black-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                                Hi, I&apos;m Benjamin. I&apos;m a full-stack developer who builds
                                and ships products across the entire stack, from backend and
                                frontend to embedded systems and DevOps.
                            </p>

                            <ul className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6 space-y-0 list-disc list-inside">
                                <li>
                                    I develop web and mobile apps. Some of the technologies i use:
                                    Next.js, Node.js, GraphQL, Go, React Native, and more.
                                </li>
                                <li>
                                    I manage Kubernetes clusters and handle CI/CD pipelines to keep
                                    apps running reliably.
                                </li>
                                <li>
                                    I also work in the embedded world, developing for ESP32 and
                                    Nordic devices.
                                </li>
                            </ul>

                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                                I love working across the stack to turn ideas into working
                                solutions.
                            </p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6 flex-wrap">
                        <a
                            href="https://www.linkedin.com/in/benjamin-serec/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/benjoboy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </a>

                        <a
                            href="https://www.strava.com/athletes/benjamin_serec"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7.008 13.828h4.172" />
                            </svg>
                            Strava
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
