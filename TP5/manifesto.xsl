<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    
    <xsl:output method="html" indent="yes"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <meta charset="UTF-8"/>
                <style>
                    * {
                        font-family: Arial;
                    }
                    
                    table, tr {
                        border: 6px solid #4CFF50;
                        font-size: 15px;
                        background-color: #f2f2f2
                    }
                </style>
            </head>
            <body>
                <h1 align="center">Manifesto</h1>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="meta">
        <table width="100%">
            <tr>
                <td width="50%">
                    <b>ID: </b> <xsl:value-of select="id"/>
                </td>
                <xsl:if test="dinício">
                    <td width="50%">
                        <b>DATA DE INÍCIO: </b> <xsl:value-of select="dinício"/>
                    </td>
                </xsl:if>
            </tr>
            <tr>
                <td width="50%">
                    <b>TÍTULO: </b> <xsl:value-of select="título"/>
                </td>
                <td width="50%">
                    <b>DATA DE FIM: </b> <xsl:value-of select="dfim"/>
                </td>
            </tr>
            <tr>
                <xsl:if test="subtítulo">
                    <td width="50%">
                        <b>SUBTÍTULO: </b> <xsl:value-of select="subtítulo"/>
                    </td>
                </xsl:if>
                <td width="50%">
                    <b>SUPERVISOR: </b>
                    <xsl:choose>
                        <xsl:when test="supervisor/website">
                            <a href="{supervisor/website}"><xsl:value-of select="supervisor/nome"/></a>
                        </xsl:when>
                        <xsl:otherwise>
                            <xsl:value-of select="supervisor/nome"/>
                        </xsl:otherwise>
                    </xsl:choose>
                </td>
            </tr>
        </table>
        <br/>
        <hr/>
    </xsl:template>
    
    <xsl:template match="equipa">
        <h3>Equipe:</h3>
        <ol>
            <xsl:apply-templates/>
        </ol>
        <br/>
        <hr/>
    </xsl:template>
    
    <xsl:template match="elemento">
        <li>
            <xsl:choose>
                <xsl:when test="website">
                    <a href="{website}"><xsl:value-of select="nome"/></a> - 
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="nome"/> - 
                </xsl:otherwise>
            </xsl:choose>       
            <b><xsl:value-of select="id"/></b> -
            <a href="mailto:{email}"><xsl:value-of select="email"/></a>
            <xsl:if test="foto">
                - <a href="{foto/@path}">Fotografia</a>
            </xsl:if>
        </li>
    </xsl:template>
    
    <xsl:template match="resumo">
        <br/>
        <b>RESUMO:</b>
        <xsl:apply-templates/>
        <hr/>
    </xsl:template>
    
    <xsl:template match="para">
        <p>
            <xsl:apply-templates/>
        </p>
    </xsl:template>
    
    <xsl:template match="b">
        <b>
            <xsl:value-of select="."/>
        </b>
    </xsl:template>
    
    <xsl:template match="i">
        <i>
            <xsl:value-of select="."/>
        </i>
    </xsl:template>
    
    <xsl:template match="resultados">
        <br/>
        <b>Resultados:</b>
        <ul>
            <xsl:apply-templates/>
        </ul>
        <hr/>
        <p align="center">
            <xsl:value-of select="format-date(current-date(), '[D01]/[M01]/[Y0001]')"/>
        </p>
        <p align="center">Universidade do Minho</p>
    </xsl:template>
    
    <xsl:template match="resultado">
        <li>
            <a href="{@path}"><xsl:value-of select="."/></a>
        </li>
    </xsl:template>
</xsl:stylesheet>