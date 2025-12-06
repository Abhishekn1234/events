import React, { useState, useEffect } from 'react';

const eventData = [
    {
        id: 1,
        title: "ONAM THIRUVIZHA 2K25",
        subtitle: "DJ",
        date: "6TH SEP",
        time: "6:00 PM",
        location: "ALOFT AL MINA, BURDUBAI, UAE",
        image: "/events (1).jpg",
    },
    {
        id: 2,
        title: "ONAM THIRUVIZHA 2K25",
        subtitle: "DJ. SHANKY",
        date: "SEP 07",
        time: "6:00 PM",
        location: "ALOFT AL MINA, BURDUBAI, UAE",
         image: "/events (2).jpg",
    },
    {
        id: 3,
        title: "ONAM THIRUVIZHA 2K25",
        subtitle: "LUNCH PARTY",
        date: "Must Know: Gate open @ 11 AM",
        time: "LUNCH: Sadhya (20 items)",
        location: "ALOFT AL MINA, BURDUBAI, UAE",
         image: "/events (3).jpg",
    },
];

const inlineStyles = `
.events-page {
    background-color: #000;
    color: #fff;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.event-cards-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    padding: 40px 0;
}

.event-card-wrapper {
    width: 300px;
    height: 450px;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    background-color: #1a1a1a;
}

.event-card-wrapper:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 15px 30px rgba(255, 215, 0, 0.4);
}

.event-card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* Modal styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    border: 4px solid gold;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
    animation: fadeIn 0.3s ease-out;
    padding: 20px;
    text-align: center;
    background-color: #111;
}

.modal-content img {
    max-width: 100%;
    max-height: 60vh;
    display: block;
    margin: 20px auto;
    border-radius: 5px;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: red;
    color: #fff;
    border: none;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    z-index: 10;
}

/* Countdown Timer (outside modal) */
.countdown-wrapper {
    display: flex;
    justify-content: center;
    margin: 40px 0;
}

.countdown-box {
    background-color: rgba(30, 30, 30, 0.9);
    border: 3px solid #ffd700;
    border-radius: 12px;
    padding: 20px 40px;
    display: flex;
    justify-content: center;
    gap: 25px;
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
}

.countdown-item {
    display: flex;
    flex-direction: column;
    min-width: 70px;
    text-align: center;
}

.countdown-item .value {
    font-size: 3rem;
    font-weight: bold;
    color: #fff;
    line-height: 1;
    margin-bottom: 5px;
    background: linear-gradient(180deg, #ffffff, #aaaaaa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.countdown-item .label {
    font-size: 1rem;
    color: #aaa;
    text-transform: uppercase;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}
`;

export default function Events() {
    useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, []); 
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [countdown, setCountdown] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});

    const handleCardClick = (imagePath: string) => {
        setSelectedImage(imagePath);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        const targetDate = new Date("2025-09-06T18:00:00"); // Set your event date/time
        const interval = setInterval(() => {
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();

            if(diff <= 0){
                clearInterval(interval);
                setCountdown({days:0, hours:0, minutes:0, seconds:0});
            } else {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diff / (1000 * 60)) % 60);
                const seconds = Math.floor((diff / 1000) % 60);
                setCountdown({days, hours, minutes, seconds});
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <style>{inlineStyles}</style>
            <div className="events-page">
                <div className="event-cards-container">
                    {eventData.map(event => (
                        <div
                            key={event.id}
                            className="event-card-wrapper"
                            onClick={() => handleCardClick(event.image)}
                        >
                            <img src={event.image} alt={event.title} className="event-card-image" />
                        </div>
                    ))}
                </div>

                {/* Countdown outside modal */}
                <div className="countdown-wrapper">
                    <div className="countdown-box">
                        <div className="countdown-item">
                            <span className="value">{String(countdown.days).padStart(2,'0')}</span>
                            <span className="label">Days</span>
                        </div>
                        <div className="countdown-item">
                            <span className="value">{String(countdown.hours).padStart(2,'0')}</span>
                            <span className="label">Hours</span>
                        </div>
                        <div className="countdown-item">
                            <span className="value">{String(countdown.minutes).padStart(2,'0')}</span>
                            <span className="label">Minutes</span>
                        </div>
                        <div className="countdown-item">
                            <span className="value">{String(countdown.seconds).padStart(2,'0')}</span>
                            <span className="label">Seconds</span>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                {selectedImage && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <button className="close-button" onClick={closeModal}>x</button>
                            <img src={selectedImage} alt="Selected Event" />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

