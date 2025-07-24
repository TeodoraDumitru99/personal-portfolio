import PlanetImg from "../assets/planet.png";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./planet.css";

const Planet = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      console.error("containerRef.current is null. Skipping initialization");
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#101012");

    const camera = new THREE.PerspectiveCamera(
      90,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      5000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.outputEncoding = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    //Resize Handling
    const onWindowResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", onWindowResize);

    // Orb - Main Sphere
    const orbGeometry = new THREE.SphereGeometry(12, 30, 30);
    const orbMaterial = new THREE.MeshStandardMaterial({
      color: "#1B172D",
      emissive: "#1B172D",
      emissiveIntensity: 1.1,
    });
    const orb = new THREE.Mesh(orbGeometry, orbMaterial);
    orb.castShadow = true;
    scene.add(orb);

    // Load PNG Image as Texture
    const textureLoader = new THREE.TextureLoader();
    const planetTexture = textureLoader.load(
      PlanetImg,
      () => console.log("Texture loaded successfully"),
      undefined,
      (error) => console.error("Error loading texture:", error)
    );

    //Fix PNG colors
    planetTexture.colorSpace = THREE.SRGBColorSpace;

    const planeGeometry = new THREE.PlaneGeometry(14.4, 14.4);
    const planeMaterial = new THREE.MeshStandardMaterial({
      map: planetTexture,
      transparent: true,
      opacity: 1,
      depthTest: true,
      depthWrite: false,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.set(0, 0, 12); // Place PNG significantly in front of the orb
    scene.add(plane);

    orb.position.set(0, 0, 0);

    // Light 1
    const light1 = new THREE.PointLight("#9E6DEF", 60, 150, 1); //purple
    light1.position.set(-5, 5, 150);
    light1.castShadow = true;
    scene.add(light1);

    // Light 2
    const light2 = new THREE.PointLight("#4B264B", 80, 200, 0.5); //pink
    light2.position.set(5, -7, 150);
    light2.castShadow = true;
    scene.add(light2);

    // Orbiting Light
    const orbitingLight = new THREE.PointLight("#ffb300", 100, 150, 1.5); //intesity and decay
    orbitingLight.castShadow = true;
    orbitingLight.position.set(0, 0, 350); //!!!!!!!!!!!!!!!
    scene.add(orbitingLight);
    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0x404040, 5);
    scene.add(ambientLight);

    // Small emissive sphere to represent orbiting light
    const orbitingLightSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 20, 32),
      new THREE.MeshStandardMaterial({
        emissive: "##ffb300",
        emissiveIntensity: 10,
        color: "#ffb300",
        borderShadow: 20,
      })
    );

    scene.add(orbitingLightSphere);

    camera.position.z = 25;

    const clock = new THREE.Clock();
    const orbitRadius = 14; // Radius of the orbit
    const light1OrbitRadius = 6;
    const light2OrbitRadius = 6;

    scene.add(orbitingLightSphere);

    orbitingLight.intensity = 5;

    // Animation Loop
    const animate = () => {
      if (!containerRef.current) return;
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime(); //time passed

      // Update orbiting light position for elliptical movement
      orbitingLight.position.x = Math.sin(elapsedTime) * orbitRadius;
      orbitingLight.position.z = Math.cos(elapsedTime) * orbitRadius;
      orbitingLight.position.y = Math.sin(elapsedTime * 0.5) * 10;

      // Synchronize orbiting light sphere position
      orbitingLightSphere.position.copy(orbitingLight.position);

      //Animate light1(elliptical orbit)

      light1.position.x = Math.sin(elapsedTime) * light1OrbitRadius;
      light1.position.z = 7 + Math.cos(elapsedTime) * light1OrbitRadius;
      light1.position.y = Math.cos(elapsedTime * 0.7) * 3;

      //Animate light1(elliptical orbit)
      light2.position.x = Math.cos(elapsedTime) * light2OrbitRadius;
      light2.position.z = 10 + Math.sin(elapsedTime) * light2OrbitRadius;
      light2.position.y = Math.sin(elapsedTime * 0.5) * 2;

      //Synchronize sphere position with the orbiting light
      orbitingLightSphere.position.copy(orbitingLight.position);

      // Determine if light is behind the sphere
      const lightVector = new THREE.Vector3().copy(orbitingLight.position);
      const sphereVector = new THREE.Vector3(0, 0, 0);
      const cameraVector = camera.position.clone();

      const toCamera = cameraVector.sub(sphereVector).normalize();
      const toLight = lightVector.sub(sphereVector).normalize();

      const dot = toCamera.dot(toLight);

      if (dot < 0) {
        orbitingLight.intensity = 0;
      } else {
        orbitingLight.intensity = 2;
      }

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on Component Unmount
    return () => {
      window.removeEventListener("resize", onWindowResize);
      if (renderer) {
        renderer.dispose();
      }

      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="planet">
      <div className="wrapper">
        <div className="planet_content">
          <h2 className="heading2 planet_heading">
            <p>
              <span>Every </span>detail
            </p>
            <p>
              <span>matters in a</span>
            </p>
            <p> well-designed</p>
            <p>
              <span>system</span>
            </p>
          </h2>
          <p className="planet_point">- just like gravity in an orbit.</p>
        </div>
      </div>
      <div className="planet_planet" ref={containerRef}></div>
    </section>
  );
};

export default Planet;
