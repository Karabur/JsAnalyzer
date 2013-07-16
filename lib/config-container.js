var fs = require('fs');

var ConfigContainer = (function () {
    function ConfigContainer(configPath) {
        this.configPath = configPath;
        this.config = JSON.parse(fs.readFileSync(configPath, 'r'));
    }
    ConfigContainer.prototype.getValue = function (name) {
        return this.config[name];
    };
    return ConfigContainer;
})();
exports.ConfigContainer = ConfigContainer;

//@ sourceMappingURL=config-container.js.map
