const template = (variables, { tpl }) => {
    const modifiedComponentName = `${variables.componentName.replace(
        "Svg",
        ""
    )}Icon`;

    return tpl`
        ${variables.imports};
        
        ${variables.interfaces};

        export const ${modifiedComponentName} = (${variables.props}) => (
            ${variables.jsx}
        );

        ${modifiedComponentName}.displayName = "${modifiedComponentName}";
    `;
};

module.exports = template;
