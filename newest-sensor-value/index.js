const co2 = {
    sensor1: {
        value: 12,
        timestamp: "2019-04-28T00:01:00Z"
    },
    sensor2: {
        value: 15,
        timestamp: "2019-04-28T00:02:00Z"
    },
    sensor3: {
        value: 15,
        timestamp: "2019-04-28T00:05:00Z"
    },
    sensor4: {
        value: 15,
        timestamp: "2019-04-28T00:03:00Z"
    },
    sensor5: {
        value: 15,
        timestamp: "2019-04-28T00:04:00Z"
    }
};

function getNewestSensorValue(allSensors) {
    const sensorsNames = Object.keys(allSensors);
    const sensors = [];
    sensorsNames.forEach(sensorName => {
        sensors.push(allSensors[sensorName]);
    });

    const sortedArray = sensors.sort((first, second) => {
        const firstDate = new Date(first.timestamp);
        const secondDate = new Date(second.timestamp);
        return secondDate - firstDate;
    });
    const newestValue = sortedArray[0];
    return newestValue;
}
