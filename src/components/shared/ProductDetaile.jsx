'use client'
import { useState } from 'react'
import Markdown from 'react-markdown'
import { Button } from '../ui/Button'

const markdown = `# SmartTech XYZ - Next-Gen Smart Home Hub
![image](https://ghorerbazarbd.com/new/wp-content/uploads/2023/07/Logo.png)
## Overview

Welcome to the future of smart living with the SmartTech XYZ Smart Home Hub. This cutting-edge electronic device is designed to seamlessly integrate into your home, offering an unparalleled level of convenience and control over your connected devices. Whether you're a tech enthusiast or someone looking to simplify your daily routines, the SmartTech XYZ Smart Home Hub is the perfect companion.

## Key Features

### 1. **Intelligent Connectivity**

The Smart Home Hub acts as the central nervous system for all your smart devices. With compatibility for a wide range of protocols, including Zigbee, Z-Wave, Bluetooth, and Wi-Fi, it effortlessly connects and manages your smart lights, thermostats, security cameras, and more. Say goodbye to compatibility issues – the SmartTech XYZ Smart Home Hub bridges the gap between different brands and technologies.

### 2. **Voice Control**

Embrace the hands-free experience with built-in support for popular voice assistants like Amazon Alexa and Google Assistant. Simply speak your commands, and watch as the Smart Home Hub executes them flawlessly. Adjust the lighting, set the thermostat, or even ask for the weather without lifting a finger – your home responds to your voice.

### 3. **Advanced Security**

Protecting your home is a top priority. The Smart Home Hub includes robust security features to safeguard your data and privacy. From end-to-end encryption to regular firmware updates, we've got you covered. Rest easy knowing that your smart home is secure from unauthorized access.

### 4. **Energy Efficiency**

Optimize energy consumption with the SmartTech XYZ Smart Home Hub. Create schedules, automate routines, and monitor energy usage for individual devices. Make informed decisions about your energy consumption, leading to a greener and more cost-effective lifestyle.

### 5. **Sleek Design**

The modern and minimalist design of the Smart Home Hub seamlessly blends with any home decor. Its compact form factor ensures that it doesn't take up much space, yet it makes a statement with its sleek aesthetics. The intuitive touch interface and vibrant display add a touch of sophistication to your smart home setup.

## Setup and Compatibility

Setting up the SmartTech XYZ Smart Home Hub is a breeze. Simply plug it in, follow the intuitive on-screen instructions, and start connecting your devices. The device is compatible with iOS and Android devices, making it accessible to a wide range of users.

## Package Contents

- SmartTech XYZ Smart Home Hub
- Power Adapter
- Quick Start Guide

## Get Started Today

Elevate your living experience with the SmartTech XYZ Smart Home Hub. Take control of your smart devices, enhance security, and embrace the convenience of voice commands. Transform your house into a futuristic, intelligent home with the ultimate electronics companion.

[Order Now](#) and join the SmartTech XYZ revolution!
`

const ProductDetaile = () => {
  const [seeFull, setSeeFull] = useState(false)
  return (
    <>
      <section className="relative">
        <Markdown className={`mt-3 overflow-hidden ${seeFull ? '' : 'h-52'}`}>
          {markdown}
        </Markdown>
        {!seeFull && (
          <div className="bg_gr h-48 absolute bottom-0 right-0 left-0 z-50" />
        )}
      </section>
      <Button
        onClick={() => setSeeFull((r) => !r)}
        size="sm"
        className={`bg-transparent border !text-[#666] ${seeFull ? 'mt-3' : 'mt-10'}`}
      >
        {seeFull ? 'See less details' : 'See full details'}
      </Button>
    </>
  )
}

export default ProductDetaile
