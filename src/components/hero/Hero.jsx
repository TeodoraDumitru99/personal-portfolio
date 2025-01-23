import PlanetImg from "../assets/planet.png";
import LIImg from "../assets/linkedin.svg";
import GitImg from "../assets/github.svg";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./hero.css";

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
      color: "#20173b",
      emissive: "#20173b",
      emissiveIntensity: 1.2,
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

    const planeGeometry = new THREE.PlaneGeometry(14.6, 14.6);
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

  return (
    <section className="hero">
      <div className="wrapper">
        <div className="hero_content">
          <div className="hero_text">
            <h2 className="hero_text_primary">Empowering Users</h2>
            <span className="hero_text_secondary">With Seamless</span>
            <strong className="hero_text_bold">Digital Interaction</strong>
            <div className="hero_personal">
              <h3 className="hero_name">Teodora Dumitru</h3>
              <h1 className="hero_tagg">UI Developer</h1>
            </div>
          </div>
          <div className="hero_contact">
            <button className="hero_button">cv</button>
            <img
              loading="lazy"
              src={LIImg}
              alt="LinkedIn"
              className="hero_social"
            />
            <img
              loading="lazy"
              zz
              src={GitImg}
              alt="Github"
              className="hero_social"
            />
          </div>
        </div>
      </div>
      <div className="hero_planet" ref={containerRef}></div>
    </section>
  ); //dyanimc view widht and dynamic view height
};

export default Hero;
