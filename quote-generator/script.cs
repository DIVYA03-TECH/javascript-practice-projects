* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #0d1117;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 20px;
}

#first {
    background-color: #161b22;
    padding: 50px 40px;
    border-radius: 12px;
    max-width: 650px;
    width: 100%;
    text-align: center;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    border: 1px solid #30363d;
}

h1 {
    font-size: 1.8rem;
    margin-bottom: 35px;
    line-height: 1.6;
    font-weight: 400;
    color: #e6edf3;
    min-height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#btn {
    background-color: #1f6feb;
    color: white;
    border: none;
    padding: 14px 32px;
    font-size: 1.05rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s ease, transform 0.1s ease;
}

#btn:hover {
    background-color: #1a5cd7;
    transform: translateY(-1px);
}

#btn:active {
    transform: translateY(0);
}

@media (max-width: 768px) {
    #first {
        padding: 35px 25px;
    }
    
    h1 {
        font-size: 1.4rem;
        min-height: 90px;
    }
    
    #btn {
        padding: 12px 28px;
        font-size: 1rem;
    }
}
