import PlanetImg from "../assets/planet.png";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./hero.css";
import resume from "../assets/files/Teodora-Dumitru-Resume.pdf";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color("#101012");
    scene.background = new THREE.Color("#0f0f1c");
    if (!containerRef.current) {
      console.error("containerRef.current is null. Skipping initialization");
      return;
    }
    const camera = new THREE.PerspectiveCamera(
      90,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      5000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.shadowMap.enabled = true;
    renderer.outputEncoding = THREE.SRGBColorSpace;
    containerRef.current.appendChild(renderer.domElement);

    // // Debug: Log container dimensions
    // console.log(
    //   "Container dimensions:",
    //   containerRef.current.clientWidth,
    //   containerRef.current.clientHeight
    // );

    //Resize Handling
    const onWindowResize = () => {
      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      // updatePlanetPosition();
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
    const heroTexture = textureLoader.load(
      PlanetImg,
      () => console.log("Texture loaded successfully"),
      undefined,
      (error) => console.error("Error loading texture:", error)
    );

    //Fix PNG colors, DO NOT DELETE THIS
    heroTexture.colorSpace = THREE.SRGBColorSpace;

    const planeGeometry = new THREE.PlaneGeometry(14.4, 14.4);
    const planeMaterial = new THREE.MeshStandardMaterial({
      map: heroTexture,
      transparent: true,
      opacity: 1,
      depthTest: true,
      depthWrite: false,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.set(0, 0, 12); // Place PNG significantly in front of the orb
    scene.add(plane);
    // planeMaterial.depthTest = false; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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

    //Debug Helpers
    // const axesHelper = new THREE.AxesHelper(10);
    // scene.add(axesHelper);

    // const lightHelper1 = new THREE.PointLightHelper(light1, 1);
    // scene.add(lightHelper1);

    // const lightHelper2 = new THREE.PointLightHelper(light2, 1);
    // scene.add(lightHelper2);

    // const lightHelperOrbit = new THREE.PointLightHelper(orbitingLight, 2);
    // scene.add(lightHelperOrbit);

    const clock = new THREE.Clock();
    const orbitRadius = 14; // Radius of the orbit
    const light1OrbitRadius = 6;
    const light2OrbitRadius = 6;

    scene.add(orbitingLightSphere);

    orbitingLight.intensity = 5;
    // const updatePlanetPosition = () => {
    //   const screenWidth = window.innerWidth;
    //   const screenHeight = window.innerHeight;

    //   const offsetX = screenWidth * 0.25; //orb 25% on the right;
    //   const offsetY = -screenHeight * 0.1; //slightly downwards;

    //   orb.position.set(offsetX / 100, offsetY / 100, 0);
    //   plane.position.set(offsetX / 100, offsetY / 100, 4);

    //   light1.position.set(offsetX / 80, 5, 10); // Adjust lights relative to orb
    //   orbitingLight.position.set(offsetX / 80, -2, 6);
    // };
    // updatePlanetPosition();
    // Animation Loop
    const animate = () => {
      if (!containerRef.current) return;
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime(); //time passed

      // Update orbiting light position for elliptical movement
      orbitingLight.position.x = Math.sin(elapsedTime) * orbitRadius;
      orbitingLight.position.z = Math.cos(elapsedTime) * orbitRadius;
      orbitingLight.position.y = Math.sin(elapsedTime * 0.5) * 10;

      // orbitingLight.position.x = Math.sin(elapsedTime) * orbitRadius;
      // orbitingLight.position.z = Math.cos(elapsedTime) * orbitRadius;
      // orbitingLight.position.y = Math.sin(elapsedTime * 0.5) * 7;

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
      if (
        containerRef.current &&
        containerRef.current.contains(renderer.domElement)
      ) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume; //imports PDF file path
    link.download = "Teodora-Dumitru-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero">
      <div className="wrapper">
        <div className="hero_content">
          <div className="hero_text">
            <h1 className="hero_text_headline">From Pixels to Perfection</h1>
            <span className="hero_name">Teodora Dumitru</span>
            <div className="hero_contact">
              <button onClick={handleDownload} className="hero_button">
                cv
              </button>
              <a
                href="https://www.linkedin.com/in/teodora-dumitru/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero_social hero_linkedin"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 43 43"
                  width="50"
                  height="50"
                  fill="#F2EEF9"
                >
                  <path d="M37.5179 0.95459H5.51788C2.75788 0.95459 0.517883 3.19459 0.517883 5.95459V37.9546C0.517883 40.7146 2.75788 42.9546 5.51788 42.9546H37.5179C40.2779 42.9546 42.5179 40.7146 42.5179 37.9546V5.95459C42.5179 3.19459 40.2779 0.95459 37.5179 0.95459ZM13.5179 16.9546V35.9546H7.51788V16.9546H13.5179ZM7.51788 11.4246C7.51788 10.0246 8.71788 8.95459 10.5179 8.95459C12.3179 8.95459 13.4479 10.0246 13.5179 11.4246C13.5179 12.8246 12.3979 13.9546 10.5179 13.9546C8.71788 13.9546 7.51788 12.8246 7.51788 11.4246ZM35.5179 35.9546H29.5179C29.5179 35.9546 29.5179 26.6946 29.5179 25.9546C29.5179 23.9546 28.5179 21.9546 26.0179 21.9146H25.9379C23.5179 21.9146 22.5179 23.9746 22.5179 25.9546C22.5179 26.8646 22.5179 35.9546 22.5179 35.9546H16.5179V16.9546H22.5179V19.5146C22.5179 19.5146 24.4479 16.9546 28.3279 16.9546C32.2979 16.9546 35.5179 19.6846 35.5179 25.2146V35.9546Z" />
                </svg>
              </a>

              <a
                href="https://github.com/TeodoraDumitru99"
                target="_blank"
                rel="noopener noreferrer"
                className="hero_social hero_github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 43 43"
                  width="50"
                  height="50"
                  fill="#F2EEF9"
                >
                  <path d="M19.5657 1.10452C9.88604 2.18762 2.10027 10.2025 1.04814 19.9504C-0.00399284 30.1315 5.67752 39.2296 14.305 42.6955C14.9363 42.9121 15.5676 42.4789 15.5676 41.6124V38.1465C15.5676 38.1465 14.7258 38.3631 13.6737 38.3631C10.7277 38.3631 9.46519 35.7637 9.25476 34.2473C9.04434 33.3808 8.62349 32.731 7.99221 32.0811C7.36093 31.8645 7.1505 31.8645 7.1505 31.6479C7.1505 31.2146 7.78178 31.2146 7.99221 31.2146C9.25477 31.2146 10.3069 32.731 10.7277 33.3808C11.7799 35.1138 13.0424 35.547 13.6737 35.547C14.5154 35.547 15.1467 35.3304 15.5676 35.1138C15.778 33.5975 16.4093 32.0811 17.6718 31.2146C12.832 30.1315 9.25476 27.3155 9.25476 22.5499C9.25476 20.167 10.3069 17.7842 11.7799 16.0513C11.5695 15.618 11.359 14.5349 11.359 13.0186C11.359 12.1521 11.359 10.8524 11.9903 9.55269C11.9903 9.55269 14.9363 9.55269 17.8822 12.3687C18.9344 11.9355 20.4074 11.7189 21.8803 11.7189C23.3533 11.7189 24.8263 11.9355 26.0889 12.3687C28.8244 9.55269 31.9808 9.55269 31.9808 9.55269C32.4017 10.8524 32.4017 12.1521 32.4017 13.0186C32.4017 14.7516 32.1912 15.618 31.9808 16.0513C33.4538 17.7842 34.5059 19.9504 34.5059 22.5499C34.5059 27.3155 30.9287 30.1315 26.0889 31.2146C27.3514 32.2977 28.1931 34.2473 28.1931 36.1969V41.829C28.1931 42.4789 28.8244 43.1287 29.6661 42.9121C37.4519 39.6628 42.923 31.8645 42.923 22.7665C42.923 9.76931 32.1912 -0.411813 19.5657 1.10452Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="hero_personal">
            <span className="hero_tagg">Frontend Developer</span>
            <span className="hero_desc">
              Where creativity meets code - building smooth, engaging and
              user-focused digital experiences.
            </span>
          </div>
        </div>
      </div>
      <div className="hero_planet" ref={containerRef}></div>
    </section>
  ); //dyanimc view widht and dynamic view height
};

export default Hero;
