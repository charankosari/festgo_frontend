// Component Loader for FestGo
class ComponentLoader {
    constructor() {
        this.loadedComponents = new Set();
    }

    async loadComponent(elementId, componentPath) {
        try {
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`Failed to load ${componentPath}: ${response.status}`);
            }
            
            const html = await response.text();
            const element = document.getElementById(elementId);
            
            if (element) {
                element.innerHTML = html;
                this.loadedComponents.add(elementId);
                
                // Execute any scripts in the loaded component
                const scripts = element.querySelectorAll('script');
                scripts.forEach(script => {
                    const newScript = document.createElement('script');
                    newScript.textContent = script.textContent;
                    document.head.appendChild(newScript);
                });

                // Trigger custom event for component loaded
                window.dispatchEvent(new CustomEvent(`${elementId}Loaded`));
            }
        } catch (error) {
            console.error(`Error loading component ${componentPath}:`, error);
        }
    }

    async loadAllComponents() {
        const components = [
            { id: 'navbar-container', path: 'navbar.html' },
            { id: 'footer-container', path: 'footer.html' }
        ];

        // Load components in parallel
        const loadPromises = components.map(component => {
            const element = document.getElementById(component.id);
            if (element) {
                return this.loadComponent(component.id, component.path);
            }
            return Promise.resolve();
        });

        await Promise.all(loadPromises);

        // Initialize components after all are loaded
        this.initializeComponents();
    }

    initializeComponents() {
        // Re-initialize AOS if it exists
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }

        // Add ripple effects to buttons
        this.addRippleEffects();
    }

    addRippleEffects() {
        function createRipple(event) {
            const button = event.currentTarget;
            const circle = document.createElement('span');
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;

            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
            circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
            circle.classList.add('ripple');

            const ripple = button.getElementsByClassName('ripple')[0];
            if (ripple) {
                ripple.remove();
            }

            button.appendChild(circle);
        }

        // Apply ripple effect to buttons
        document.querySelectorAll('button, a[class*="bg-gradient"]').forEach(button => {
            if (!button.hasAttribute('data-ripple-added')) {
                button.addEventListener('click', createRipple);
                button.style.position = 'relative';
                button.style.overflow = 'hidden';
                button.setAttribute('data-ripple-added', 'true');
            }
        });
    }
}

// Initialize component loader when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const loader = new ComponentLoader();
    loader.loadAllComponents();
});

// Add base ripple styles if they don't exist
if (!document.querySelector('#ripple-styles')) {
    const style = document.createElement('style');
    style.id = 'ripple-styles';
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            animation: ripple-animation 600ms linear;
            background-color: rgba(255, 255, 255, 0.6);
            pointer-events: none;
        }
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}
